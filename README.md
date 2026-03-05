What is JSX, and why is it used?

উত্তরঃ JSX JavaScript XML হলো JavaScript-এর একটি syntax extension, যা দেখতে HTML-এর মতো। এটি মূলত React-এ ব্যবহার করা হয় UI তৈরির জন্য। React-এ JSX ব্যবহার করে আমরা একই ফাইলে UI এবং JavaScript logic লিখতে পারি।

What is the difference between State and Props?

উত্তরঃ Props হলো এক component থেকে অন্য component-এ ডেটা পাঠানোর উপায়।
এটি সাধারণত parent component → child component এ যায়। State হলো component-এর নিজের ডেটা যেখানে data store করে রাখা হয় এবং সেখান থেকে data নিয়ে বিভিন্ন স্থানে পরিবর্তন করা হয়।

What is the useState hook, and how does it work?

উত্তরঃ useState হলো React-এর একটি Hook, যা function component-এ state ব্যবহারের সুযোগ দেয়।
এর মাধ্যমে component-এর ভিতরে ডেটা রাখা ও পরিবর্তন করা যায়।

How can you share state between components in React?

উত্তরঃ যখন দুইটা child component একই data ব্যবহার করবে, তখন সেই state তাদের common parent component-এ রাখি। Child যদি parent-এর state পরিবর্তন করতে চায়, তাহলে parent একটি function props হিসেবে পাঠায়। যখন অনেক nested component-এ state পাঠাতে হয়, তখন Context API ব্যবহার করা হয়, তখন বার বার props drilling করে data পাঠানো সমস্যা হয়ে যায়।

How is event handling done in React?

উত্তরঃ React-এ event handling করা হয় camelCase syntax ব্যবহার করে এবং event-এর মধ্যে function pass করে।
