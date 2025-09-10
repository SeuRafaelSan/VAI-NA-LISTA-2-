
import React from 'react';

interface FeedbackToastProps {
    message: string | null;
}

const FeedbackToast: React.FC<FeedbackToastProps> = ({ message }) => {
    if (!message) return null;

    return (
        <div className="fixed bottom-5 right-5 bg-gray-800 text-white py-3 px-6 rounded-lg shadow-xl animate-fade-in-out z-50">
            <p>{message}</p>
        </div>
    );
};

// Add keyframes to tailwind.config.js or in a global CSS file if you have one.
// Since we don't have one, we can rely on adding styles dynamically or just having a simple fade.
// For simplicity, we'll use a simple CSS-in-JS style here for the animation definition, though typically this would be in a CSS file.
const style = document.createElement('style');
style.innerHTML = `
@keyframes fade-in-out {
  0% { opacity: 0; transform: translateY(20px); }
  10% { opacity: 1; transform: translateY(0); }
  90% { opacity: 1; transform: translateY(0); }
  100% { opacity: 0; transform: translateY(20px); }
}
.animate-fade-in-out {
  animation: fade-in-out 3s ease-in-out forwards;
}
@keyframes fade-in {
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
}
.animate-fade-in {
  animation: fade-in 0.5s ease-out forwards;
}
`;
document.head.appendChild(style);


export default FeedbackToast;
