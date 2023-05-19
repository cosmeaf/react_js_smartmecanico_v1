import React, { useEffect, useRef, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import Logo from '../images/logo.png';
import SidebarLinkGroup from './SidebarLinkGroup';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar, faCar, faChevronLeft, faChevronUp, faUserAlt } from '@fortawesome/free-solid-svg-icons';


interface SidebarProps {
  sidebarOpen: boolean;
  setSidebarOpen: (arg: boolean) => void;
}

const Sidebar = ({ sidebarOpen, setSidebarOpen }: SidebarProps) => {
  const location = useLocation();
  const { pathname } = location;

  const trigger = useRef<any>(null);
  const sidebar = useRef<any>(null);

  const storedSidebarExpanded = localStorage.getItem('sidebar-expanded');
  const [sidebarExpanded, setSidebarExpanded] = useState(
    storedSidebarExpanded === null ? false : storedSidebarExpanded === 'true'
  );

  // close on click outside
  useEffect(() => {
    const clickHandler = ({ target }: MouseEvent) => {
      if (!sidebar.current || !trigger.current) return;
      if (
        !sidebarOpen ||
        sidebar.current.contains(target) ||
        trigger.current.contains(target)
      )
        return;
      setSidebarOpen(false);
    };
    document.addEventListener('click', clickHandler);
    return () => document.removeEventListener('click', clickHandler);
  });

  // close if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }: KeyboardEvent) => {
      if (!sidebarOpen || keyCode !== 27) return;
      setSidebarOpen(false);
    };
    document.addEventListener('keydown', keyHandler);
    return () => document.removeEventListener('keydown', keyHandler);
  });

  useEffect(() => {
    localStorage.setItem('sidebar-expanded', sidebarExpanded.toString());
    if (sidebarExpanded) {
      document.querySelector('body')?.classList.add('sidebar-expanded');
    } else {
      document.querySelector('body')?.classList.remove('sidebar-expanded');
    }
  }, [sidebarExpanded]);

  return (
    <aside
      ref={sidebar}
      className={`absolute left-0 top-0 z-9999 flex h-screen w-72.5 flex-col overflow-y-hidden bg-black duration-300 ease-linear dark:bg-boxdark lg:static lg:translate-x-0 ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
    >
      {/* <!-- SIDEBAR HEADER --> */}
      <div className="flex items-center justify-between gap-1 px-6 py-2 lg:py-6.5">
        <div>
          <NavLink to="/dashboard">
            <img src={Logo} alt="Logo" className="w-[100px] ml-11" />
          </NavLink>
        </div>
        <button
          ref={trigger}
          onClick={() => setSidebarOpen(!sidebarOpen)}
          aria-controls="sidebar"
          aria-expanded={sidebarOpen}
          className="block lg:hidden"
        >
          <FontAwesomeIcon icon={faChevronLeft} />
        </button>
      </div>
      {/* <!-- SIDEBAR HEADER --> */}

      <div className="no-scrollbar flex flex-col overflow-y-auto duration-300 ease-linear">
        {/* <!-- Sidebar Menu --> */}
        <nav className="mt-1 px-4 lg:mt-9 lg:px-6">
          {/* <!-- Menu Group --> */}
          <div>
            <h3 className="mb-4 ml-4 text-sm font-semibold text-bodydark2">
              PAINEL ADMINISTRATIVO
            </h3>
            {/* Personal Data Menu Start */}
            <ul className="mb-6 flex flex-col gap-1.5">
              {/* <!-- Menu Item Personal Data --> */}
              <SidebarLinkGroup
                activeCondition={pathname === '/ui' || pathname.includes('ui')}
              >
                {(handleClick, open) => {
                  return (
                    <React.Fragment>
                      <NavLink
                        to="#"
                        className={`group relative flex items-center gap-2.5 rounded-sm py-2 px-4 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4 ${(pathname === '/ui' || pathname.includes('ui')) &&
                          'bg-graydark dark:bg-meta-4'
                          }`}
                        onClick={(e) => {
                          e.preventDefault();
                          sidebarExpanded
                            ? handleClick()
                            : setSidebarExpanded(true);
                        }}
                      >
                        <FontAwesomeIcon icon={faUserAlt} />
                        Dados Pessoais
                        <FontAwesomeIcon icon={faChevronUp} className={`absolute right-4 top-1/2 -translate-y-1/2 fill-current ${open && 'rotate-180'}`} />
                      </NavLink>

                      {/* <!-- Sub-Nenu Personal Data Start --> */}
                      <div className={`translate transform overflow-hidden ${!open && 'hidden'}`} >
                        <ul className="mt-4 mb-5.5 flex flex-col gap-2.5 pl-6">
                          <li>
                            <NavLink
                              to="/dashboard/address"
                              className={({ isActive }) =>
                                'group relative flex items-center gap-2.5 rounded-md px-4 font-medium text-bodydark2 duration-300 ease-in-out hover:text-white ' +
                                (isActive && '!text-white')
                              }
                            >
                              Endereço
                            </NavLink>
                          </li>
                          <li>
                            <NavLink
                              to="/dashboard/profile"
                              className={({ isActive }) =>
                                'group relative flex items-center gap-2.5 rounded-md px-4 font-medium text-bodydark2 duration-300 ease-in-out hover:text-white ' +
                                (isActive && '!text-white')
                              }
                            >
                              Perfil
                            </NavLink>
                          </li>
                        </ul>
                      </div>
                      {/* <!-- Sub-Nenu Personal Data End --> */}
                    </React.Fragment>
                  );
                }}
              </SidebarLinkGroup>
              {/* <!-- Menu Item Personal Data --> */}
            </ul>
             {/* Personal Data Menu End */}
            {/* Vehicle Menu Start */}
            <ul className="mb-6 flex flex-col gap-1.5">
              {/* <!-- Menu Item Vehicle Data --> */}
              <SidebarLinkGroup
                activeCondition={pathname === '/ui' || pathname.includes('ui')}
              >
                {(handleClick, open) => {
                  return (
                    <React.Fragment>
                      <NavLink
                        to="#"
                        className={`group relative flex items-center gap-2.5 rounded-sm py-2 px-4 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4 ${(pathname === '/ui' || pathname.includes('ui')) &&
                          'bg-graydark dark:bg-meta-4'
                          }`}
                        onClick={(e) => {
                          e.preventDefault();
                          sidebarExpanded
                            ? handleClick()
                            : setSidebarExpanded(true);
                        }}
                      >
                        <FontAwesomeIcon icon={faCar} />
                        Meus Veiculos
                        <FontAwesomeIcon icon={faChevronUp} className={`absolute right-4 top-1/2 -translate-y-1/2 fill-current ${open && 'rotate-180'}`} />
                      </NavLink>

                      {/* <!-- Sub-Nenu Vehicle Data Start --> */}
                      <div className={`translate transform overflow-hidden ${!open && 'hidden'}`} >
                        <ul className="mt-4 mb-5.5 flex flex-col gap-2.5 pl-6">
                          <li>
                            <NavLink
                              to="/ui/alerts"
                              className={({ isActive }) =>
                                'group relative flex items-center gap-2.5 rounded-md px-4 font-medium text-bodydark2 duration-300 ease-in-out hover:text-white ' +
                                (isActive && '!text-white')
                              }
                            >
                              Veiculos
                            </NavLink>
                          </li>
                        </ul>
                      </div>
                      {/* <!-- Sub-Nenu Vehicle Data End --> */}
                    </React.Fragment>
                  );
                }}
              </SidebarLinkGroup>
              {/* <!-- Menu Item Vehicle Data --> */}
            </ul>
            {/*  Vehicle Menu End */}

            {/* Schedule Menu Start */}
            <ul className="mb-6 flex flex-col gap-1.5">
              {/* <!-- Menu Item Schedule Data --> */}
              <SidebarLinkGroup
                activeCondition={pathname === '/ui' || pathname.includes('ui')}
              >
                {(handleClick, open) => {
                  return (
                    <React.Fragment>
                      <NavLink
                        to="#"
                        className={`group relative flex items-center gap-2.5 rounded-sm py-2 px-4 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4 ${(pathname === '/ui' || pathname.includes('ui')) &&
                          'bg-graydark dark:bg-meta-4'
                          }`}
                        onClick={(e) => {
                          e.preventDefault();
                          sidebarExpanded
                            ? handleClick()
                            : setSidebarExpanded(true);
                        }}
                      >
                        <FontAwesomeIcon icon={faCalendar} />
                        Meus Agendamentos
                        <FontAwesomeIcon icon={faChevronUp} className={`absolute right-4 top-1/2 -translate-y-1/2 fill-current ${open && 'rotate-180'}`} />
                      </NavLink>

                      {/* <!-- Sub-Nenu Schedule Data Start --> */}
                      <div className={`translate transform overflow-hidden ${!open && 'hidden'}`} >
                        <ul className="mt-4 mb-5.5 flex flex-col gap-2.5 pl-6">
                          <li>
                            <NavLink
                              to="/ui/alerts"
                              className={({ isActive }) =>
                                'group relative flex items-center gap-2.5 rounded-md px-4 font-medium text-bodydark2 duration-300 ease-in-out hover:text-white ' +
                                (isActive && '!text-white')
                              }
                            >
                              Agendamentos
                            </NavLink>
                          </li>
                          <li>
                            <NavLink
                              to="/ui/alerts"
                              className={({ isActive }) =>
                                'group relative flex items-center gap-2.5 rounded-md px-4 font-medium text-bodydark2 duration-300 ease-in-out hover:text-white ' +
                                (isActive && '!text-white')
                              }
                            >
                              Históricos de Agendamentos
                            </NavLink>
                          </li>
                        </ul>
                      </div>
                      {/* <!-- Sub-Nenu Schedule Data End --> */}
                    </React.Fragment>
                  );
                }}
              </SidebarLinkGroup>
              {/* <!-- Menu Item Schedule Data --> */}
            </ul>
            {/*  Schedule Menu End */}

            {/* Supplies Menu Start */}
            <ul className="mb-6 flex flex-col gap-1.5">
              {/* <!-- Menu Item Supplies Data --> */}
              <SidebarLinkGroup
                activeCondition={pathname === '/ui' || pathname.includes('ui')}
              >
                {(handleClick, open) => {
                  return (
                    <React.Fragment>
                      <NavLink
                        to="#"
                        className={`group relative flex items-center gap-2.5 rounded-sm py-2 px-4 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4 ${(pathname === '/ui' || pathname.includes('ui')) &&
                          'bg-graydark dark:bg-meta-4'
                          }`}
                        onClick={(e) => {
                          e.preventDefault();
                          sidebarExpanded
                            ? handleClick()
                            : setSidebarExpanded(true);
                        }}
                      >
                        <FontAwesomeIcon icon={faCalendar} />
                        Meus Agendamentos
                        <FontAwesomeIcon icon={faChevronUp} className={`absolute right-4 top-1/2 -translate-y-1/2 fill-current ${open && 'rotate-180'}`} />
                      </NavLink>

                      {/* <!-- Sub-Nenu Supplies Data Start --> */}
                      <div className={`translate transform overflow-hidden ${!open && 'hidden'}`} >
                        <ul className="mt-4 mb-5.5 flex flex-col gap-2.5 pl-6">
                          <li>
                            <NavLink
                              to="/ui/alerts"
                              className={({ isActive }) =>
                                'group relative flex items-center gap-2.5 rounded-md px-4 font-medium text-bodydark2 duration-300 ease-in-out hover:text-white ' +
                                (isActive && '!text-white')
                              }
                            >
                              Abastecimentos
                            </NavLink>
                          </li>
                          <li>
                            <NavLink
                              to="/ui/alerts"
                              className={({ isActive }) =>
                                'group relative flex items-center gap-2.5 rounded-md px-4 font-medium text-bodydark2 duration-300 ease-in-out hover:text-white ' +
                                (isActive && '!text-white')
                              }
                            >
                              Históricos de Abastecimentos
                            </NavLink>
                          </li>
                        </ul>
                      </div>
                      {/* <!-- Sub-Nenu Supplies Data End --> */}
                    </React.Fragment>
                  );
                }}
              </SidebarLinkGroup>
              {/* <!-- Menu Item Supplies Data --> */}
            </ul>
            {/*  Supplies Menu End */}

            {/* Supplies Menu Start */}
            <ul className="mb-6 flex flex-col gap-1.5">
              {/* <!-- Menu Item Supplies Data --> */}
              <SidebarLinkGroup
                activeCondition={pathname === '/ui' || pathname.includes('ui')}
              >
                {(handleClick, open) => {
                  return (
                    <React.Fragment>
                      <NavLink
                        to="#"
                        className={`group relative flex items-center gap-2.5 rounded-sm py-2 px-4 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4 ${(pathname === '/ui' || pathname.includes('ui')) &&
                          'bg-graydark dark:bg-meta-4'
                          }`}
                        onClick={(e) => {
                          e.preventDefault();
                          sidebarExpanded
                            ? handleClick()
                            : setSidebarExpanded(true);
                        }}
                      >
                        <FontAwesomeIcon icon={faCalendar} />
                        Meus Agendamentos
                        <FontAwesomeIcon icon={faChevronUp} className={`absolute right-4 top-1/2 -translate-y-1/2 fill-current ${open && 'rotate-180'}`} />
                      </NavLink>

                      {/* <!-- Sub-Nenu Supplies Data Start --> */}
                      <div className={`translate transform overflow-hidden ${!open && 'hidden'}`} >
                        <ul className="mt-4 mb-5.5 flex flex-col gap-2.5 pl-6">
                          <li>
                            <NavLink
                              to="/ui/alerts"
                              className={({ isActive }) =>
                                'group relative flex items-center gap-2.5 rounded-md px-4 font-medium text-bodydark2 duration-300 ease-in-out hover:text-white ' +
                                (isActive && '!text-white')
                              }
                            >
                              Abastecimentos
                            </NavLink>
                          </li>
                          <li>
                            <NavLink
                              to="/ui/alerts"
                              className={({ isActive }) =>
                                'group relative flex items-center gap-2.5 rounded-md px-4 font-medium text-bodydark2 duration-300 ease-in-out hover:text-white ' +
                                (isActive && '!text-white')
                              }
                            >
                              Históricos de Abastecimentos
                            </NavLink>
                          </li>
                        </ul>
                      </div>
                      {/* <!-- Sub-Nenu Supplies Data End --> */}
                    </React.Fragment>
                  );
                }}
              </SidebarLinkGroup>
              {/* <!-- Menu Item Supplies Data --> */}
            </ul>
            {/*  Supplies Menu End */}

            {/* Supplies Menu Start */}
            <ul className="mb-6 flex flex-col gap-1.5">
              {/* <!-- Menu Item Supplies Data --> */}
              <SidebarLinkGroup
                activeCondition={pathname === '/ui' || pathname.includes('ui')}
              >
                {(handleClick, open) => {
                  return (
                    <React.Fragment>
                      <NavLink
                        to="#"
                        className={`group relative flex items-center gap-2.5 rounded-sm py-2 px-4 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4 ${(pathname === '/ui' || pathname.includes('ui')) &&
                          'bg-graydark dark:bg-meta-4'
                          }`}
                        onClick={(e) => {
                          e.preventDefault();
                          sidebarExpanded
                            ? handleClick()
                            : setSidebarExpanded(true);
                        }}
                      >
                        <FontAwesomeIcon icon={faCalendar} />
                        Meus Agendamentos
                        <FontAwesomeIcon icon={faChevronUp} className={`absolute right-4 top-1/2 -translate-y-1/2 fill-current ${open && 'rotate-180'}`} />
                      </NavLink>

                      {/* <!-- Sub-Nenu Supplies Data Start --> */}
                      <div className={`translate transform overflow-hidden ${!open && 'hidden'}`} >
                        <ul className="mt-4 mb-5.5 flex flex-col gap-2.5 pl-6">
                          <li>
                            <NavLink
                              to="/ui/alerts"
                              className={({ isActive }) =>
                                'group relative flex items-center gap-2.5 rounded-md px-4 font-medium text-bodydark2 duration-300 ease-in-out hover:text-white ' +
                                (isActive && '!text-white')
                              }
                            >
                              Abastecimentos
                            </NavLink>
                          </li>
                          <li>
                            <NavLink
                              to="/ui/alerts"
                              className={({ isActive }) =>
                                'group relative flex items-center gap-2.5 rounded-md px-4 font-medium text-bodydark2 duration-300 ease-in-out hover:text-white ' +
                                (isActive && '!text-white')
                              }
                            >
                              Históricos de Abastecimentos
                            </NavLink>
                          </li>
                        </ul>
                      </div>
                      {/* <!-- Sub-Nenu Supplies Data End --> */}
                    </React.Fragment>
                  );
                }}
              </SidebarLinkGroup>
              {/* <!-- Menu Item Supplies Data --> */}
            </ul>
            {/*  Supplies Menu End */}

            {/* Supplies Menu Start */}
            <ul className="mb-6 flex flex-col gap-1.5">
              {/* <!-- Menu Item Supplies Data --> */}
              <SidebarLinkGroup
                activeCondition={pathname === '/ui' || pathname.includes('ui')}
              >
                {(handleClick, open) => {
                  return (
                    <React.Fragment>
                      <NavLink
                        to="#"
                        className={`group relative flex items-center gap-2.5 rounded-sm py-2 px-4 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4 ${(pathname === '/ui' || pathname.includes('ui')) &&
                          'bg-graydark dark:bg-meta-4'
                          }`}
                        onClick={(e) => {
                          e.preventDefault();
                          sidebarExpanded
                            ? handleClick()
                            : setSidebarExpanded(true);
                        }}
                      >
                        <FontAwesomeIcon icon={faCalendar} />
                        Meus Agendamentos
                        <FontAwesomeIcon icon={faChevronUp} className={`absolute right-4 top-1/2 -translate-y-1/2 fill-current ${open && 'rotate-180'}`} />
                      </NavLink>

                      {/* <!-- Sub-Nenu Supplies Data Start --> */}
                      <div className={`translate transform overflow-hidden ${!open && 'hidden'}`} >
                        <ul className="mt-4 mb-5.5 flex flex-col gap-2.5 pl-6">
                          <li>
                            <NavLink
                              to="/ui/alerts"
                              className={({ isActive }) =>
                                'group relative flex items-center gap-2.5 rounded-md px-4 font-medium text-bodydark2 duration-300 ease-in-out hover:text-white ' +
                                (isActive && '!text-white')
                              }
                            >
                              Abastecimentos
                            </NavLink>
                          </li>
                          <li>
                            <NavLink
                              to="/ui/alerts"
                              className={({ isActive }) =>
                                'group relative flex items-center gap-2.5 rounded-md px-4 font-medium text-bodydark2 duration-300 ease-in-out hover:text-white ' +
                                (isActive && '!text-white')
                              }
                            >
                              Históricos de Abastecimentos
                            </NavLink>
                          </li>
                        </ul>
                      </div>
                      {/* <!-- Sub-Nenu Supplies Data End --> */}
                    </React.Fragment>
                  );
                }}
              </SidebarLinkGroup>
              {/* <!-- Menu Item Supplies Data --> */}
            </ul>
            {/*  Supplies Menu End */}

            {/* Supplies Menu Start */}
            <ul className="mb-6 flex flex-col gap-1.5">
              {/* <!-- Menu Item Supplies Data --> */}
              <SidebarLinkGroup
                activeCondition={pathname === '/ui' || pathname.includes('ui')}
              >
                {(handleClick, open) => {
                  return (
                    <React.Fragment>
                      <NavLink
                        to="#"
                        className={`group relative flex items-center gap-2.5 rounded-sm py-2 px-4 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4 ${(pathname === '/ui' || pathname.includes('ui')) &&
                          'bg-graydark dark:bg-meta-4'
                          }`}
                        onClick={(e) => {
                          e.preventDefault();
                          sidebarExpanded
                            ? handleClick()
                            : setSidebarExpanded(true);
                        }}
                      >
                        <FontAwesomeIcon icon={faCalendar} />
                        Meus Agendamentos
                        <FontAwesomeIcon icon={faChevronUp} className={`absolute right-4 top-1/2 -translate-y-1/2 fill-current ${open && 'rotate-180'}`} />
                      </NavLink>

                      {/* <!-- Sub-Nenu Supplies Data Start --> */}
                      <div className={`translate transform overflow-hidden ${!open && 'hidden'}`} >
                        <ul className="mt-4 mb-5.5 flex flex-col gap-2.5 pl-6">
                          <li>
                            <NavLink
                              to="/ui/alerts"
                              className={({ isActive }) =>
                                'group relative flex items-center gap-2.5 rounded-md px-4 font-medium text-bodydark2 duration-300 ease-in-out hover:text-white ' +
                                (isActive && '!text-white')
                              }
                            >
                              Abastecimentos
                            </NavLink>
                          </li>
                          <li>
                            <NavLink
                              to="/ui/alerts"
                              className={({ isActive }) =>
                                'group relative flex items-center gap-2.5 rounded-md px-4 font-medium text-bodydark2 duration-300 ease-in-out hover:text-white ' +
                                (isActive && '!text-white')
                              }
                            >
                              Históricos de Abastecimentos
                            </NavLink>
                          </li>
                        </ul>
                      </div>
                      {/* <!-- Sub-Nenu Supplies Data End --> */}
                    </React.Fragment>
                  );
                }}
              </SidebarLinkGroup>
              {/* <!-- Menu Item Supplies Data --> */}
            </ul>
            {/*  Supplies Menu End */}

            {/* Supplies Menu Start */}
            <ul className="mb-6 flex flex-col gap-1.5">
              {/* <!-- Menu Item Supplies Data --> */}
              <SidebarLinkGroup
                activeCondition={pathname === '/ui' || pathname.includes('ui')}
              >
                {(handleClick, open) => {
                  return (
                    <React.Fragment>
                      <NavLink
                        to="#"
                        className={`group relative flex items-center gap-2.5 rounded-sm py-2 px-4 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4 ${(pathname === '/ui' || pathname.includes('ui')) &&
                          'bg-graydark dark:bg-meta-4'
                          }`}
                        onClick={(e) => {
                          e.preventDefault();
                          sidebarExpanded
                            ? handleClick()
                            : setSidebarExpanded(true);
                        }}
                      >
                        <FontAwesomeIcon icon={faCalendar} />
                        Meus Agendamentos
                        <FontAwesomeIcon icon={faChevronUp} className={`absolute right-4 top-1/2 -translate-y-1/2 fill-current ${open && 'rotate-180'}`} />
                      </NavLink>

                      {/* <!-- Sub-Nenu Supplies Data Start --> */}
                      <div className={`translate transform overflow-hidden ${!open && 'hidden'}`} >
                        <ul className="mt-4 mb-5.5 flex flex-col gap-2.5 pl-6">
                          <li>
                            <NavLink
                              to="/ui/alerts"
                              className={({ isActive }) =>
                                'group relative flex items-center gap-2.5 rounded-md px-4 font-medium text-bodydark2 duration-300 ease-in-out hover:text-white ' +
                                (isActive && '!text-white')
                              }
                            >
                              Abastecimentos
                            </NavLink>
                          </li>
                          <li>
                            <NavLink
                              to="/ui/alerts"
                              className={({ isActive }) =>
                                'group relative flex items-center gap-2.5 rounded-md px-4 font-medium text-bodydark2 duration-300 ease-in-out hover:text-white ' +
                                (isActive && '!text-white')
                              }
                            >
                              Históricos de Abastecimentos
                            </NavLink>
                          </li>
                        </ul>
                      </div>
                      {/* <!-- Sub-Nenu Supplies Data End --> */}
                    </React.Fragment>
                  );
                }}
              </SidebarLinkGroup>
              {/* <!-- Menu Item Supplies Data --> */}
            </ul>
            {/*  Supplies Menu End */}

            {/* Supplies Menu Start */}
            <ul className="mb-6 flex flex-col gap-1.5">
              {/* <!-- Menu Item Supplies Data --> */}
              <SidebarLinkGroup
                activeCondition={pathname === '/ui' || pathname.includes('ui')}
              >
                {(handleClick, open) => {
                  return (
                    <React.Fragment>
                      <NavLink
                        to="#"
                        className={`group relative flex items-center gap-2.5 rounded-sm py-2 px-4 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4 ${(pathname === '/ui' || pathname.includes('ui')) &&
                          'bg-graydark dark:bg-meta-4'
                          }`}
                        onClick={(e) => {
                          e.preventDefault();
                          sidebarExpanded
                            ? handleClick()
                            : setSidebarExpanded(true);
                        }}
                      >
                        <FontAwesomeIcon icon={faCalendar} />
                        Meus Agendamentos
                        <FontAwesomeIcon icon={faChevronUp} className={`absolute right-4 top-1/2 -translate-y-1/2 fill-current ${open && 'rotate-180'}`} />
                      </NavLink>

                      {/* <!-- Sub-Nenu Supplies Data Start --> */}
                      <div className={`translate transform overflow-hidden ${!open && 'hidden'}`} >
                        <ul className="mt-4 mb-5.5 flex flex-col gap-2.5 pl-6">
                          <li>
                            <NavLink
                              to="/ui/alerts"
                              className={({ isActive }) =>
                                'group relative flex items-center gap-2.5 rounded-md px-4 font-medium text-bodydark2 duration-300 ease-in-out hover:text-white ' +
                                (isActive && '!text-white')
                              }
                            >
                              Abastecimentos
                            </NavLink>
                          </li>
                          <li>
                            <NavLink
                              to="/ui/alerts"
                              className={({ isActive }) =>
                                'group relative flex items-center gap-2.5 rounded-md px-4 font-medium text-bodydark2 duration-300 ease-in-out hover:text-white ' +
                                (isActive && '!text-white')
                              }
                            >
                              Históricos de Abastecimentos
                            </NavLink>
                          </li>
                        </ul>
                      </div>
                      {/* <!-- Sub-Nenu Supplies Data End --> */}
                    </React.Fragment>
                  );
                }}
              </SidebarLinkGroup>
              {/* <!-- Menu Item Supplies Data --> */}
            </ul>
            {/*  Supplies Menu End */}

            {/* Supplies Menu Start */}
            <ul className="mb-6 flex flex-col gap-1.5">
              {/* <!-- Menu Item Supplies Data --> */}
              <SidebarLinkGroup
                activeCondition={pathname === '/ui' || pathname.includes('ui')}
              >
                {(handleClick, open) => {
                  return (
                    <React.Fragment>
                      <NavLink
                        to="#"
                        className={`group relative flex items-center gap-2.5 rounded-sm py-2 px-4 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4 ${(pathname === '/ui' || pathname.includes('ui')) &&
                          'bg-graydark dark:bg-meta-4'
                          }`}
                        onClick={(e) => {
                          e.preventDefault();
                          sidebarExpanded
                            ? handleClick()
                            : setSidebarExpanded(true);
                        }}
                      >
                        <FontAwesomeIcon icon={faCalendar} />
                        Meus Agendamentos
                        <FontAwesomeIcon icon={faChevronUp} className={`absolute right-4 top-1/2 -translate-y-1/2 fill-current ${open && 'rotate-180'}`} />
                      </NavLink>

                      {/* <!-- Sub-Nenu Supplies Data Start --> */}
                      <div className={`translate transform overflow-hidden ${!open && 'hidden'}`} >
                        <ul className="mt-4 mb-5.5 flex flex-col gap-2.5 pl-6">
                          <li>
                            <NavLink
                              to="/ui/alerts"
                              className={({ isActive }) =>
                                'group relative flex items-center gap-2.5 rounded-md px-4 font-medium text-bodydark2 duration-300 ease-in-out hover:text-white ' +
                                (isActive && '!text-white')
                              }
                            >
                              Abastecimentos
                            </NavLink>
                          </li>
                          <li>
                            <NavLink
                              to="/ui/alerts"
                              className={({ isActive }) =>
                                'group relative flex items-center gap-2.5 rounded-md px-4 font-medium text-bodydark2 duration-300 ease-in-out hover:text-white ' +
                                (isActive && '!text-white')
                              }
                            >
                              Históricos de Abastecimentos
                            </NavLink>
                          </li>
                        </ul>
                      </div>
                      {/* <!-- Sub-Nenu Supplies Data End --> */}
                    </React.Fragment>
                  );
                }}
              </SidebarLinkGroup>
              {/* <!-- Menu Item Supplies Data --> */}
            </ul>
            {/*  Supplies Menu End */}

            {/* Supplies Menu Start */}
            <ul className="mb-6 flex flex-col gap-1.5">
              {/* <!-- Menu Item Supplies Data --> */}
              <SidebarLinkGroup
                activeCondition={pathname === '/ui' || pathname.includes('ui')}
              >
                {(handleClick, open) => {
                  return (
                    <React.Fragment>
                      <NavLink
                        to="#"
                        className={`group relative flex items-center gap-2.5 rounded-sm py-2 px-4 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4 ${(pathname === '/ui' || pathname.includes('ui')) &&
                          'bg-graydark dark:bg-meta-4'
                          }`}
                        onClick={(e) => {
                          e.preventDefault();
                          sidebarExpanded
                            ? handleClick()
                            : setSidebarExpanded(true);
                        }}
                      >
                        <FontAwesomeIcon icon={faCalendar} />
                        Meus Agendamentos
                        <FontAwesomeIcon icon={faChevronUp} className={`absolute right-4 top-1/2 -translate-y-1/2 fill-current ${open && 'rotate-180'}`} />
                      </NavLink>

                      {/* <!-- Sub-Nenu Supplies Data Start --> */}
                      <div className={`translate transform overflow-hidden ${!open && 'hidden'}`} >
                        <ul className="mt-4 mb-5.5 flex flex-col gap-2.5 pl-6">
                          <li>
                            <NavLink
                              to="/ui/alerts"
                              className={({ isActive }) =>
                                'group relative flex items-center gap-2.5 rounded-md px-4 font-medium text-bodydark2 duration-300 ease-in-out hover:text-white ' +
                                (isActive && '!text-white')
                              }
                            >
                              Abastecimentos
                            </NavLink>
                          </li>
                          <li>
                            <NavLink
                              to="/ui/alerts"
                              className={({ isActive }) =>
                                'group relative flex items-center gap-2.5 rounded-md px-4 font-medium text-bodydark2 duration-300 ease-in-out hover:text-white ' +
                                (isActive && '!text-white')
                              }
                            >
                              Históricos de Abastecimentos
                            </NavLink>
                          </li>
                        </ul>
                      </div>
                      {/* <!-- Sub-Nenu Supplies Data End --> */}
                    </React.Fragment>
                  );
                }}
              </SidebarLinkGroup>
              {/* <!-- Menu Item Supplies Data --> */}
            </ul>
            {/*  Supplies Menu End */}

            {/* Supplies Menu Start */}
            <ul className="mb-6 flex flex-col gap-1.5">
              {/* <!-- Menu Item Supplies Data --> */}
              <SidebarLinkGroup
                activeCondition={pathname === '/ui' || pathname.includes('ui')}
              >
                {(handleClick, open) => {
                  return (
                    <React.Fragment>
                      <NavLink
                        to="#"
                        className={`group relative flex items-center gap-2.5 rounded-sm py-2 px-4 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4 ${(pathname === '/ui' || pathname.includes('ui')) &&
                          'bg-graydark dark:bg-meta-4'
                          }`}
                        onClick={(e) => {
                          e.preventDefault();
                          sidebarExpanded
                            ? handleClick()
                            : setSidebarExpanded(true);
                        }}
                      >
                        <FontAwesomeIcon icon={faCalendar} />
                        Meus Agendamentos
                        <FontAwesomeIcon icon={faChevronUp} className={`absolute right-4 top-1/2 -translate-y-1/2 fill-current ${open && 'rotate-180'}`} />
                      </NavLink>

                      {/* <!-- Sub-Nenu Supplies Data Start --> */}
                      <div className={`translate transform overflow-hidden ${!open && 'hidden'}`} >
                        <ul className="mt-4 mb-5.5 flex flex-col gap-2.5 pl-6">
                          <li>
                            <NavLink
                              to="/ui/alerts"
                              className={({ isActive }) =>
                                'group relative flex items-center gap-2.5 rounded-md px-4 font-medium text-bodydark2 duration-300 ease-in-out hover:text-white ' +
                                (isActive && '!text-white')
                              }
                            >
                              Abastecimentos
                            </NavLink>
                          </li>
                          <li>
                            <NavLink
                              to="/ui/alerts"
                              className={({ isActive }) =>
                                'group relative flex items-center gap-2.5 rounded-md px-4 font-medium text-bodydark2 duration-300 ease-in-out hover:text-white ' +
                                (isActive && '!text-white')
                              }
                            >
                              Históricos de Abastecimentos
                            </NavLink>
                          </li>
                        </ul>
                      </div>
                      {/* <!-- Sub-Nenu Supplies Data End --> */}
                    </React.Fragment>
                  );
                }}
              </SidebarLinkGroup>
              {/* <!-- Menu Item Supplies Data --> */}
            </ul>
            {/*  Supplies Menu End */}

          </div>
        </nav>
        {/* <!-- Sidebar Menu --> */}
      </div>
    </aside>
  );
};

export default Sidebar;