import { useEffect, useRef, useState } from "react";

const PAYPAL_CLIENT_ID = "BAAmD-BzfoFrp0QcqpmKyDzJS1rp0exw6w5-jeimCRvc2zfCAte7-DXFDWREfg8K2C728DNYq9c5G8gT64";
const PAYPAL_SDK_SCRIPT_ID = "paypal-subscriptions-sdk";
const PAYPAL_SDK_URL = `https://www.paypal.com/sdk/js?client-id=${PAYPAL_CLIENT_ID}&components=buttons&vault=true&intent=subscription`;

let paypalSdkPromise;

function loadPayPalSdk() {
  if (window.paypal?.Buttons) {
    return Promise.resolve(window.paypal);
  }

  if (paypalSdkPromise) {
    return paypalSdkPromise;
  }

  paypalSdkPromise = new Promise((resolve, reject) => {
    const existingScript = document.getElementById(PAYPAL_SDK_SCRIPT_ID);

    function handleLoad() {
      if (window.paypal?.Buttons) {
        resolve(window.paypal);
        return;
      }

      paypalSdkPromise = undefined;
      document.getElementById(PAYPAL_SDK_SCRIPT_ID)?.remove();
      reject(new Error("PayPal SDK loaded without exposing the Buttons API."));
    }

    function handleError() {
      paypalSdkPromise = undefined;
      document.getElementById(PAYPAL_SDK_SCRIPT_ID)?.remove();
      reject(new Error("PayPal SDK could not be loaded."));
      return;
    }

    if (existingScript) {
      existingScript.addEventListener("load", handleLoad, { once: true });
      existingScript.addEventListener("error", handleError, { once: true });
      return;
    }

    const script = document.createElement("script");
    script.id = PAYPAL_SDK_SCRIPT_ID;
    script.src = PAYPAL_SDK_URL;
    script.async = true;
    script.dataset.sdkIntegrationSource = "button-factory";
    script.addEventListener("load", handleLoad, { once: true });
    script.addEventListener("error", handleError, { once: true });
    document.head.appendChild(script);
  });

  return paypalSdkPromise;
}

export default function PayPalSubscriptionButton({ copy, planId }) {
  const containerRef = useRef(null);
  const [status, setStatus] = useState("loading");
  const [subscriptionId, setSubscriptionId] = useState("");

  useEffect(() => {
    let isActive = true;
    let buttons;

    async function renderPayPalButton() {
      try {
        setStatus("loading");
        setSubscriptionId("");

        const paypal = await loadPayPalSdk();
        if (!isActive || !containerRef.current) {
          return;
        }

        containerRef.current.replaceChildren();
        buttons = paypal.Buttons({
          style: {
            shape: "rect",
            color: "gold",
            layout: "vertical",
            label: "subscribe",
          },
          createSubscription(data, actions) {
            return actions.subscription.create({
              plan_id: planId,
            });
          },
          onApprove(data) {
            if (isActive) {
              setSubscriptionId(data.subscriptionID || "");
              setStatus("approved");
            }
            return;
          },
          onCancel() {
            if (isActive) {
              setStatus("cancelled");
            }
            return;
          },
          onError(error) {
            console.error("PayPal subscription error", error);
            if (isActive) {
              setStatus("error");
            }
            return;
          },
        });

        if (typeof buttons.isEligible === "function" && !buttons.isEligible()) {
          setStatus("unavailable");
          return;
        }

        await buttons.render(containerRef.current);
        if (isActive) {
          setStatus("ready");
        }
      } catch (error) {
        console.error("PayPal SDK error", error);
        if (isActive) {
          setStatus("error");
        }
      }

      return;
    }

    renderPayPalButton();

    return () => {
      isActive = false;
      buttons?.close?.();
      containerRef.current?.replaceChildren();
    };
  }, [copy, planId]);

  return (
    <div>
      {status === "loading" && (
        <div className="mb-4 rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-center text-xs text-muted-foreground" role="status">
          {copy.loading}
        </div>
      )}

      <div ref={containerRef} id={`paypal-button-container-${planId}`} className="min-h-[48px]" />

      {status === "approved" && (
        <div className="mt-4 rounded-xl border border-emerald-400/25 bg-emerald-400/10 px-4 py-3" role="status">
          <p className="text-sm font-semibold text-emerald-300">{copy.approved}</p>
          {subscriptionId && <p className="mt-1 break-all text-xs text-emerald-100/75">{copy.subscriptionId}: {subscriptionId}</p>}
        </div>
      )}

      {status === "cancelled" && <p className="mt-4 text-center text-xs text-muted-foreground" role="status">{copy.cancelled}</p>}
      {status === "error" && <p className="mt-4 text-center text-xs text-red-300" role="alert">{copy.error}</p>}
      {status === "unavailable" && <p className="mt-4 text-center text-xs text-amber-200" role="alert">{copy.unavailable}</p>}
    </div>
  );
}