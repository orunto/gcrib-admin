import { ReactComponent as Logo } from '../images/logo.svg';
import { ReactComponent as HomeIco } from '../images/home.svg';
import { ReactComponent as BlogIco } from '../images/blog.svg';
import { ReactComponent as StarterIco } from '../images/starter.svg';
import { ReactComponent as CreatorsIco } from '../images/creator.svg';
import { ReactComponent as StoresIco } from '../images/stores.svg';
import { ReactComponent as ProductsIco } from '../images/products.svg';
import { ReactComponent as ReadsIco } from '../images/reads.svg';
import { ReactComponent as VideosIco } from '../images/videos.svg';
import { ReactComponent as AdminIco } from '../images/admin.svg';
import { NavItem } from '../components';

import '../css/Nav.css';

const Nav = () => {
    return (
        <nav>
            <Logo className='Logo'/>
            <div className='NavItemContainer'>
                <NavItem>
                    <HomeIco />
                    <a href='/'>Home</a>
                </NavItem>

                <NavItem>
                    <BlogIco />
                    <a href='/blog'>Blog</a>
                </NavItem>

                <NavItem>
                    <StarterIco />
                    <a href='/starter'>Starter Packs</a>
                </NavItem>

                <NavItem>
                    <CreatorsIco />
                    <a href='/creators'>Creators</a>
                </NavItem>

                <NavItem>
                    <StoresIco />
                    <a href='/stores'>Stores</a>
                </NavItem>

                <NavItem>
                    <ProductsIco />
                    <a href='/products'>Products</a>
                </NavItem>

                <NavItem>
                    <ReadsIco />
                    <a href='/reads'>Reads (App)</a>
                </NavItem>

                <NavItem>
                    <VideosIco />
                    <a href='/videos'>Videos (App)</a>
                </NavItem>

                <NavItem>
                    <AdminIco />
                    <a href='/admins'>Admins</a>
                </NavItem>
            </div>
        </nav>
    )
}

export default Nav;