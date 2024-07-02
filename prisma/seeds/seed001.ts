import { PrismaClient } from "@prisma/client";
import { log } from "console";

const prisma = new PrismaClient();

async function main() {
    for(let i=0; i< 100; i++){
        let Alpha:string = createAlphaString(i)
        let name = 'Error' + Alpha;
        let title = Alpha + Alpha + Alpha;
        let body = title + 'B';
        let order_id = 200000 + i;
        let data = await prisma.error.create({
            data:{
                title:title,
                body:body,
                order_id:order_id,
                name:name
            }
        }
        )
    }
}

function createAlphaString(num:number):string{
    let n = num;
    let res = ''
    while(n > 26){
        res = String.fromCharCode(n%26 + 65) + res;
        n = Math.floor(n/26);
    }
    return res;
}

main().catch((e) => {
    console.log(e);
    process.exit(1);
}).finally(async() => {
    await prisma.$disconnect()
})