import {Children} from "react";

export function CustomSwitch({children,value}) {
    const cases=[];
    const defaults=[];
    Children.forEach(children,(child, index)=>{
        //console.log(child.props.value)
        if(child.type.name ==="CustomCase"){

            if(typeof child.props.value === "function"){
                if(child.props.value(value)){
                    cases.push(child);
                }
            }
            else if(child.props.value === value){
                cases.push(child);
            }
        }
        else if(child.type.name ==="DefaultCase"){
            defaults.push(child)
        }
    })
    // if(children.type.name)
    // console.log(children.type.name)
    if(cases.length > 0){
        return cases;
    }else{
        return defaults;
    }
}