const Box = (props) => {
    return (
        <div className="bg-black text-light-purple text-center max-w-md p-10 rounded-md border">
            {props.children}
        </div>
    );
};

export default Box;
