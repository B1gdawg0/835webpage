import Image from "next/image";
import me from "@/app/assets/best.jpeg";

function NewsCard(props){
    return (
        <div>
            <Image
                className="rounded"
                src={props.path}
                width={props.width}
                height={330}
                alt={props.title}
            />
            <div className="mt-[24px]">
                <h1 className="font-bold text-[20px] mb-[8px]">
                    {props.title}
                </h1>
                <p>
                    {props.description}
                </p>
            </div>
        </div>
    );
}

function NewsList(){
    return(
        <div className="container mx-auto p-4"> 
        </div>
    );
}


export default NewsList;