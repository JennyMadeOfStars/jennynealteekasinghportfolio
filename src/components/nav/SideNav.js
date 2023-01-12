// elements
import LazyImage from '../../elements/LazyImage';

/**
 * @function SideNav
 * @description Functional component containing list of elements
 * @returns {JSX} Markup for the side navigation component
 */
const SideNav = () => {
    const sideNavItems = [{
        name: 'Github',
        class: 'git',
        icon: '/assets/logos/github.png',
        url: 'https://github.com/JennyMadeOfStars'
    }, {
        name: 'Linked In',
        class: 'linked',
        icon: '/assets/logos/linked-in.png',
        url: 'https://www.linkedin.com/in/jennynealteekasingh'
    }];

    return (
        <div className="side-navigation">
            <ul>
                {sideNavItems.map((item, index) => {
                    return (
                        <li key={`${item}_${index}`} className={item.class}>
                            <a 
                                href={item.url} 
                                className="icon"
                                target="_new">
                                    <LazyImage 
                                        imgSrc={item.icon}
                                        textName={item.name}
                                        alt={`${item.name} logo`}
                                        displayNothing={true}
                                    />
                            </a>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};

export default SideNav;
