import {fetchData} from '@/lib/fetchData';
import Link from 'next/link';

type Error = {
  id:number;
  name:string;
  date:Date;
  title:string;
  body:string;
}

type HomeProps = {
  data:Error[];
}

export default async function Home(){

  const res = await fetchData();
 
  return (
    <main>
		  <h1>Chademo検査工程</h1>
      <table style={{width:'100%'}}>
        <thead><tr style={{color:'#fff',lineHeight:1.2,fontWeight:'unset',fontSize:'18px',fontFamily:'OpenSans-Regular'}}><th className='column1'>解決日</th><th className='column2'>番号</th><th className='column3'>製品</th><th className='column4'>エラー</th><th className='column5'>エラー詳細</th><th className='column6'>解決策</th></tr></thead>
        <tbody style={{background:'#fff'}}>
         {res.props.posts.map(post => (
          <tr>
            <td className='column1'><p>{post.date.toLocaleString('ja-jp').replaceAll('/','-')}</p></td>
            <td className='column2'><p>{post.order_id}</p></td>
            <td className='column3'><p>{post.name}</p></td>
            <td className='column4'><p>{post.title}</p></td>
            <td className='column5'><p>{post.body}</p></td>
            <td className='column6'><p>{post.solutiuon}</p></td>
          </tr>))}
        </tbody>
      </table>
    </main>
  );
}