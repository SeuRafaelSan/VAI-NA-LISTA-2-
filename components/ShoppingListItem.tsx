import React, { useState, useEffect } from 'react';
import { ShoppingItem } from '../types';

interface ShoppingListItemProps {
    item: ShoppingItem;
    onUpdate: (id: string, updatedValues: Partial<ShoppingItem>) => void;
    onRemove: (id: string) => void;
}

const ShoppingListItem: React.FC<ShoppingListItemProps> = ({ item, onUpdate, onRemove }) => {
    const [price, setPrice] = useState(item.price.toString());

    useEffect(() => {
        setPrice(item.price.toString());
    }, [item.price]);
    
    const handlePriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPrice(e.target.value);
    };

    const handlePriceBlur = () => {
        const newPrice = parseFloat(price);
        if (!isNaN(newPrice) && newPrice >= 0 && newPrice !== item.price) {
            onUpdate(item.id, { price: newPrice });
        } else {
             setPrice(item.price.toString());
        }
    };
    
    const handleQuantityChange = (delta: number) => {
        const newQuantity = item.quantity + delta;
        if (newQuantity > 0) {
            onUpdate(item.id, { quantity: newQuantity });
        }
    };

    const togglePurchased = () => {
        onUpdate(item.id, { purchased: !item.purchased });
    };

    return (
        <div className={`bg-white p-4 rounded-lg shadow-md transition-all duration-300 ${item.purchased ? 'bg-green-50 opacity-70' : ''}`}>
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
                <div className="flex-grow">
                    <div className="flex items-center gap-2">
                        <h3 className={`text-lg sm:text-xl font-bold text-gray-800 ${item.purchased ? 'line-through' : ''}`}>
                            {item.name}
                        </h3>
                        {item.icon && (
                            item.icon.startsWith('http') ?
                            <img src={item.icon} alt={item.name} className="w-6 h-6 object-contain" /> :
                            <span>{item.icon}</span>
                        )}
                    </div>
                    <span className="text-sm text-gray-500 capitalize">Unidade: {item.unit}</span>
                </div>
                <div className="flex items-center gap-2 w-full sm:w-auto self-end sm:self-center">
                    <button onClick={togglePurchased} className={`flex-grow sm:flex-grow-0 px-4 py-2 text-sm font-semibold rounded-lg transition ${item.purchased ? 'bg-green-500 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}>
                        {item.purchased ? '✓ Comprado' : 'Marcar como comprado'}
                    </button>
                     <button 
                        onClick={() => onRemove(item.id)} 
                        className="text-gray-400 hover:text-red-600 p-2 rounded-full h-10 w-10 flex items-center justify-center flex-shrink-0 transition-colors"
                        aria-label={`Remover ${item.name}`}
                    >
                        <i className="fas fa-trash-alt text-lg"></i>
                    </button>
                </div>
            </div>
            <div className="border-t my-4"></div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-end">
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Quantidade</label>
                    <div className="flex items-center gap-3">
                        <button onClick={() => handleQuantityChange(-1)} className="w-10 h-10 bg-gray-200 rounded-full text-lg font-bold text-gray-700 hover:bg-gray-300 active:bg-gray-400 transition">-</button>
                        <span className="text-lg font-semibold text-gray-800 w-24 text-center">{item.quantity} {item.unit}</span>
                        <button onClick={() => handleQuantityChange(1)} className="w-10 h-10 bg-gray-200 rounded-full text-lg font-bold text-gray-700 hover:bg-gray-300 active:bg-gray-400 transition">+</button>
                    </div>
                </div>
                <div>
                    <label htmlFor={`price-${item.id}`} className="block text-sm font-medium text-gray-700 mb-1">Preço Unitário (R$)</label>
                    <div className="relative">
                        <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-500">R$</span>
                        <input
                            type="number"
                            id={`price-${item.id}`}
                            value={price}
                            onChange={handlePriceChange}
                            onBlur={handlePriceBlur}
                            placeholder="0.00"
                            step="0.01"
                            min="0"
                            className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ShoppingListItem;