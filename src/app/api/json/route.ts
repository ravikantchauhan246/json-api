import { NextRequest } from "next/server"
import {z} from "zod"

// string , boolean , number

const determineSchemaType = (schema: any) =>{
    
}


const jsonSchemaToZod = (schema: any) =>{
    const type = determineSchemaType(schema)
}

export const POST = async (req: NextRequest) =>{
    const body = await req.json()
    //data
    //format
    // step 1: make usre incoming request is valid
    const genericSchema = z.object({
        data: z.string(),
        format: z.object({}).passthrough(),

    })

    const {data,format} = genericSchema.parse(body)
    // step 2: create a schema from the expected user format
    const dynamicSchema = jsonSchemaToZod(format)
    // console.log("body",body)'
    return new Response("Ok")
}