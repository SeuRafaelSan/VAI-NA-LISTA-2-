
import React from 'react';
import { ShoppingItem } from '../types';

interface SummaryItemProps {
    item: ShoppingItem;
}

const SummaryItem: React.FC<SummaryItemProps> = ({ item }) => {
    const itemTotal = item.quantity * item.price;

    return (
        <div className="flex justify-between items-center py-2 border-b border-gray-200">
            <div>
                <h4 className="font-semibold text-gray-800">{item.name}</h4>
                <p className="text-sm text-gray-500">
                    {item.quantity} {item.unit} × R$ {item.price.toFixed(2).replace('.', ',')}
                </p>
            </div>
            <p className="font-bold text-gray-800 text-lg">
                R$ {itemTotal.toFixed(2).replace('.', ',')}
            </p>
        </div>
    );
};

export default SummaryItem;
