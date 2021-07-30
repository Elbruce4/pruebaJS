import { useEffect, useState } from "react";


const Promesa = (promise) => {

    const [ data , setData ] = useState("1")

    const operacion = new Promise ((acepta , rechaza)=>{
        if (typeof data !== "number") {
            rechaza(`SALE UN ERROR`)
        }
        setTimeout(()=>{
            acepta({
                data1 : data,
                dataXdos : data * 2
            })
        },4000);
    });

    operacion.then((data)=>{
        console.log(data);
        setTimeout(()=>{
            operacion.then((data)=>{
            console.log(data);
            })
        },4000);
        
    }); 

    operacion.catch((data)=>{
        console.log(data);
    })

    const [info , setInfo] = useState(0);

    useEffect(()=>{
        console.log(`El usuario número ` + info + " es: " + data[info]);
    }, [info]);

    return (
        <button onClick={()=>setInfo(info + 1)}>
            {data}
        </button>
    );
}

export default Promesa