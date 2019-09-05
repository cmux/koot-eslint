import React from 'react';

class TestComponent extends React.Component {
    render() {
        return (
            <div>
                TEST
                <button
                    onClick={() => {
                        console.log(this);
                    }}
                >
                    BUTTON
                </button>
            </div>
        );
    }
}
