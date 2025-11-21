import React from "react";

const FaQustion = () => {
  return (
    <div>
      <div>
        <h1 className=" text-5xl font-bold text-center">Frequently Asked Question (FAQ)</h1>
        <p className=" text-center m-5">
          Enhance posture, mobility, and well-being effortlessly with Posture
          Pro. Achieve proper alignment,<br /> reduce pain, and strengthen your body
          with ease!
        </p>
      </div>
      <div className="my-10 space-y-4">
        <div
          tabIndex={0}
          className="collapse collapse-arrow bg-green-100 border-green-500 border "
        > 
          <div className="collapse-title font-semibold">
            How does this posture corrector work?{" "}
          </div>
          <div className="collapse-content text-sm ">
            A posture corrector works by providing support and gentle alignment to your shoulders, back, and spine, encouraging you to maintain proper posture throughout the day. Here’s how it typically functions: A posture corrector works by providing support and gentle alignment to your shoulders.
          </div>
        </div>
        <div
          tabIndex={0}
          className="collapse collapse-arrow bg-green-100 border-green-500 border"
        >
          <div className="collapse-title font-semibold">
            Is it suitable for all ages and body types?{" "}
          </div>
          <div className="collapse-content text-sm">
            Posture correctors are generally designed to fit a wide range of ages and body types, but they're not universally suitable. Most products come in adjustable sizes, yet children, older adults, or people with specific medical conditions should consult a professional before use. Proper fit is crucial—an ill-fitting device may cause discomfort or limit effectiveness. For best results, choose a model tailored to your body size and needs rather than assuming one size fits all.
          </div>
        </div>
        <div
          tabIndex={0}
          className="collapse collapse-arrow bg-green-100 border-green-500 border"
        >
          <div className="collapse-title font-semibold">
            Does it really help with back pain and posture improvement?{" "}
          </div>
          <div className="collapse-content text-sm">
            Yes, posture correctors can help, but results vary. They mainly serve as reminders to sit or stand upright, which may reduce strain and ease mild back or neck pain. However, experts stress they’re not a cure—lasting improvement comes from strengthening core and back muscles, stretching, and consistent posture awareness.
          </div>
        </div>
        <div
          tabIndex={0}
          className="collapse collapse-arrow bg-green-100 border-green-500 border"
        >
          <div className="collapse-title font-semibold">
            Does it have smart features like vibration alerts?{" "}
          </div>
          <div className="collapse-content text-sm">
            Most stock alert systems notify you via email, SMS, or app push notifications. They typically do not include vibration alerts unless tied to a mobile app’s push notification settings, where your phone itself can vibrate.
          </div>
        </div>
        <div
          tabIndex={0}
          className="collapse collapse-arrow bg-green-100 border-green-500 border"
        >
          <div className="collapse-title font-semibold">
            How will I be notified when the product is back in stock?{" "}
          </div>
          <div className="collapse-content text-sm">
            You'll be notified through the method you selected when setting up alerts—usually by email or app notification. Once the product is back in stock or the price drops below your target, you'll receive an instant update so you can purchase quickly before it sells out again.
          </div>
        </div>
      </div>
    </div>
  );
};

export default FaQustion;
