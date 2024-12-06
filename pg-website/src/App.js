import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import PGCard from './components/PGCard';

function App() {
    return (
        <div>
            <Header />
            <main>
                <PGCard 
                    name="Sunrise PG" 
                    location="Hyderabad" 
                    price="₹6,000/month" 
                    reviews="4.5/5" 
                />
                <PGCard 
                    name="Green Valley PG" 
                    location="Secunderabad" 
                    price="₹7,500/month" 
                    reviews="4.2/5" 
                />
            </main>
            <Footer />
        </div>
    );
}

export default App;

