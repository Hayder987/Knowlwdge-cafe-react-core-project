
import profile from '../../assets/images/profile.png'

export default function Header(){
    return(
        <div className='flex justify-between items-center p-4 border-b-2 mb-6'>
            <h1 className='text-4xl font-semibold'>Knowledge Cafe</h1>
            <img src={profile} alt="" />
        </div>
    )
}