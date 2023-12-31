import ArrayIndexAndLength from "./ArrayIndexAndLength";
import AddingAndRemovingDataToFromArrays from "./AddingAndRemovingDataToFromArrays";
import MapFunction from "./MapFunction";
import FilterFunction from "./FilterFunction";
import FindIndex from "./FindIndex";
function WorkingWithArrays() {
    var functionScoped = 2;
    let blockScoped = 5;
    const constant1 = functionScoped - blockScoped;
    let numberArray1 = [1, 2, 3, 4, 5];
    let stringArray1 = ['string1', 'string2'];

    let variableArray1 = [
        functionScoped,   blockScoped,
        constant1,        numberArray1,   stringArray1
    ];
    return (
        <>
            <h3> Working With Arrays </h3>
            numberArray1 = {numberArray1}<br />
            stringArray1 = {stringArray1}<br />
            variableArray1 = {variableArray1}<br />
            <ArrayIndexAndLength/>
            <AddingAndRemovingDataToFromArrays/>
            <MapFunction/>
            <FilterFunction/>
            <FindIndex/>
        </>

    )
}

export default WorkingWithArrays