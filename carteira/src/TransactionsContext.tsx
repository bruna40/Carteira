import {createContext, useEffect, useState} from 'react';
import { api } from './services/api';

interface Transactions {
    id: number;
    title: string;
    type: string;
    category: string;
    amount: number;
    createdAt: string;
}

type TransactionsInput = Omit<Transactions, 'id' | 'createdAt'>;

interface TransactionsProviderProps {
    children: React.ReactNode;
}

interface TransactionsContextData {
    transactions: Transactions[];
    createTransaction: (transaction: TransactionsInput) => Promise<void>;
}

export const TransactionsContext = createContext<TransactionsContextData>(
    {} as TransactionsContextData
    
);


TransactionsContext.displayName = 'TransactionsContext';


export function TransactionsProvider({children}:TransactionsProviderProps) {

    const [transactions, setTransactions] = useState<Transactions[]>([]);

    useEffect(() => {
        api.get('/transactions')
            .then(response => setTransactions(response.data.transactions))
    },[])

    async function createTransaction(transaction: TransactionsInput) {
       const response = await api.post('/transactions', {
            ...transaction,
            createdAt: new Date(),
        });
         const { transaction: transactionCreated } = response.data;

            setTransactions([
                ...transactions,
                transactionCreated
            ]);
    }
    
    return (
        <TransactionsContext.Provider value={
            { transactions, createTransaction}
        }>
            {children}
        </TransactionsContext.Provider>
    )
}
