const element = (
    <div>
        <h2>JSX</h2>
        <p>A paragraph</p>
    </div>
);
console.log(element);

const Content = () => {
    return (
        <div className="card m-5">
            <div className="card-body">
                <h1>Cat facts</h1>
                <ul>
                    <li>A house cat is genetically 95.6% tiger.</li>
                    <li>Cats can jump 5 times their height.</li>
                </ul>
            </div>
        </div>
    );
};

ReactDOM.render(
    <div>
        <Content />
    </div>,
    document.getElementById("root"));