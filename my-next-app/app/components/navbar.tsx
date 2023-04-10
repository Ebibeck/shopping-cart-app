import Image from "next/image";
import Link from "next/link";
import {ShoppingCartIcon} from '@heroicons/react/24/outline'
export default function Navbar() {
  return (
   <div className="navbar bg-slate-300">
  <div className="flex-1">
    <Link href={'#'} className="btn btn-ghost normal-case text-xl">daisyUI</Link>
  </div>
  <div className="flex-none gap-3">
    <div className="dropdown dropdown-end">
      <label tabIndex={0} className="btn btn-ghost btn-circle">
        <div className="indicator">
         <ShoppingCartIcon className="w-7 h-7"/>
          <span className="badge badge-sm indicator-item">8</span>
        </div>
      </label>
      <div tabIndex={0} className="mt-3 card card-compact dropdown-content w-52 bg-base-100 shadow">
        <div className="card-body">
          <span className="font-bold text-lg">8 Items</span>
          <span className="text-info">Subtotal: $999</span>
          <div className="card-actions">
            <button className="btn btn-primary btn-block">View cart</button>
          </div>
        </div>
      </div>
    </div>
    <div className="dropdown dropdown-end">
      <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <Image src="" alt="" />
        </div>
      </label>
      <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
        <li>
          <Link href={'#'} className="justify-between">
            Profile
            <span className="badge">New</span>
          </Link>
        </li>
        <li><Link href={'#'}>Settings</Link></li>
        <li><Link href={'#'}>Logout</Link></li>
      </ul>
    </div>
  </div>
</div>
  );
}
