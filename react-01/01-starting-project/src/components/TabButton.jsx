export default function TabButton({onSelect,children}){
    // document.querySelector('button').addEventListener('click',()=>{}); // We can't do it like this
    // local functions have access to props as well which is a benefit 
    console.log("tab button component loaded");
    return (
    <li>
        <button onClick={onSelect}> {children} </button>
    </li>);
}