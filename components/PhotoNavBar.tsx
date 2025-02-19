import { Fragment } from 'react';

import Link from 'next/link';
import { useRouter } from 'next/router';

import { Menu, Transition, Disclosure } from '@headlessui/react';

import { FiGithub } from 'react-icons/fi';
import { BiHome } from 'react-icons/bi';
import { AiOutlineSafety } from 'react-icons/ai';
import { CgHomeAlt } from 'react-icons/cg';
import { BsTranslate } from 'react-icons/bs';

import siteConfig from '../config/site.config';

function classNames(...classes: any[]) {
    return classes.filter(Boolean).join(' ');
}

const PhotoNavBar = () => {
    const { asPath } = useRouter();

    return (
        <div id='notion-photo-navbar' className='sticky top-0 z-50'>
            <div className='bg-white dark:bg-gray-500'>
                <div className='flex justify-center py-3'>
                    <nav className='flex'>
                        <div id='notion-photo-navbar-start' className='mr-20 flex items-start md:mr-80'>
                            <div className='mx-3'>
                                <Link href='/'>
                                    <a>
                                        <BiHome className='h-6 w-6' />
                                    </a>
                                </Link>
                            </div>
                        </div>

                        <div id='notion-photo-navbar-end' className='flex items-end'>
                            <div className='mx-3'>
                                <Link href='https://harryyep.com'>
                                    <a>
                                        <CgHomeAlt className='h-6 w-6' />
                                    </a>
                                </Link>
                            </div>
                            <div className='mx-3'>
                                <Link href='https://github.com/okisdev'>
                                    <a>
                                        <FiGithub className='h-6 w-6' />
                                    </a>
                                </Link>
                            </div>
                            <div className='mx-3'>
                                <Link href='https://vercel.com/legal/privacy-policy'>
                                    <a>
                                        <AiOutlineSafety className='h-6 w-6' />
                                    </a>
                                </Link>
                            </div>
                            <Menu as='div' className='relative mx-3 ml-3'>
                                <div>
                                    <Menu.Button className='flex rounded-full text-sm'>
                                        <span className='sr-only'>Open language menu</span>
                                        <BsTranslate className='h-6 w-6' aria-hidden='true' />
                                    </Menu.Button>
                                </div>
                                <Transition
                                    as={Fragment}
                                    enter='transition ease-out duration-100'
                                    enterFrom='transform opacity-0 scale-95'
                                    enterTo='transform opacity-100 scale-100'
                                    leave='transition ease-in duration-75'
                                    leaveFrom='transform opacity-100 scale-100'
                                    leaveTo='transform opacity-0 scale-95'
                                >
                                    <Menu.Items className='absolute right-0 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none'>
                                        {siteConfig.global.site.language.map((item, index) => {
                                            return (
                                                <Menu.Item key={index}>
                                                    {({ active }) => (
                                                        <Link href={item.code} as={asPath} locale={item.code}>
                                                            <a className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}>{item.name}</a>
                                                        </Link>
                                                    )}
                                                </Menu.Item>
                                            );
                                        })}
                                    </Menu.Items>
                                </Transition>
                            </Menu>
                        </div>
                    </nav>
                </div>
            </div>
        </div>
    );
};

export default PhotoNavBar;
