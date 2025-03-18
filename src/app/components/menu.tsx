"use client";
import React from 'react';

export default function Menu() {
    // @ts-ignore
    const handleSubmit = async (event) => {
        event.preventDefault();
        const data = new FormData(event.target);
        const value = data.get('input');

        const response = await fetch('/api/menu/item/save', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ value }),
        });

        if (response.ok) {
            console.log('Data saved successfully');
        } else {
            console.error('Error saving data');
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit} style={{ display: "flex", alignItems: "center" }}>
                <input type="text" name="input" placeholder="Enter text" />
                <button type="submit" style={{ marginLeft: "10px" }}>Save</button>
            </form>

            /House <br/>
            <br/>
            // Loft <br/>
            /// Back Left<br/>
            /// Back Right<br/>
            <br/>
            // Under Stairs<br/>
            <br/>
            // Study<br/>
            /// Desk<br/>
            <br/>
            /Garage<br/>

        </div>
    );
}
