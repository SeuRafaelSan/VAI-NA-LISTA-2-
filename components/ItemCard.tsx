import React from 'react';
import { Unit } from '../types';

interface ItemCardProps {
    item: { name: string; unit: Unit; icon: string; iconClassName?: string };
    onAddItem: () => void;
    onRemoveItem: () => void;
    isSelected: boolean;
}

const ItemCard: React.FC<ItemCardProps> = ({ item, onAddItem, onRemoveItem, isSelected }) => {
    return (
        <div className={`relative border rounded-lg p-4 flex flex-col items-center justify-center text-center transition-all duration-300 ${isSelected ? 'border-green-400 bg-green-50 shadow-inner' : 'bg-white shadow-sm hover:shadow-md hover:-translate-y-1'}`}>
            <div className="h-12 w-12 flex items-center justify-center mb-2">
                {item.icon.startsWith('http') ? (
                    <img src={item.icon} alt={item.name} className={`max-h-full max-w-full object-contain transform ${item.iconClassName || 'scale-150'}`} />
                ) : (
                    <span className="text-4xl">{item.icon}</span>
                )}
            </div>
            <h3 className="font-bold text-gray-700">{item.name}</h3>
            <p className="text-sm text-gray-500 capitalize">{item.unit}</p>
            <button
                onClick={isSelected ? onRemoveItem : onAddItem}
                className={`mt-4 w-full font-bold py-2 rounded-lg transition-colors text-sm ${
                    isSelected
                        ? 'bg-yellow-400 text-yellow-900 hover:bg-yellow-500'
                        : 'bg-blue-100 text-blue-800 hover:bg-blue-600 hover:text-white'
                }`}
            >
                {isSelected ? 'Remover' : '+ Adicionar'}
            </button>
        </div>
    );
};

export default ItemCard;