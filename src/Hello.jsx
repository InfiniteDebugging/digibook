const Hello = ( { name } ) => {
    return (
        <div>
            <h1>Hello { name??"Visitor" }</h1>
        </div>
    );
}

export default Hello;