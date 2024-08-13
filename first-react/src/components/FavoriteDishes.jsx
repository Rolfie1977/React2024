import React from 'react';

export function FavoriteDishes(props) {
    return (
        <div>
            <h2>Mine Livretter</h2>
            <ul>
                {props.dishes.map((dish, index) => (
                    <li key={index}>{dish}</li>
                ))}
            </ul>
        </div>
    );
}
