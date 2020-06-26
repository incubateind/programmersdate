import React from 'react';
import Pagination from "react-js-pagination";
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';


const Pagin = ({ postsPerPage, totalPosts, paginate, activePage, dropdownOpen, toggle, showPosts }) => {

    return (
        <div style={{ display: "flex", justifyContent: "space-evenly" }}>
            <div>
                <Pagination
                    activePage={activePage}
                    itemsCountPerPage={postsPerPage}
                    totalItemsCount={totalPosts}
                    onChange={(e) => paginate(e)}
                />
            </div>
            <div>
                <Dropdown isOpen={dropdownOpen} toggle={toggle}>
                    <DropdownToggle caret color="primary" size="sm">
                        Entries
                </DropdownToggle>
                    <DropdownMenu>
                        <DropdownItem onClick={(e) => showPosts(e.target.innerText)}>2</DropdownItem>
                        <DropdownItem onClick={(e) => showPosts(e.target.innerText)}>5</DropdownItem>
                        <DropdownItem onClick={(e) => showPosts(e.target.innerText)}>10</DropdownItem>
                        <DropdownItem onClick={(e) => showPosts(e.target.innerText)}>25</DropdownItem>
                        <DropdownItem onClick={(e) => showPosts(e.target.innerText)}>50</DropdownItem>
                        <DropdownItem onClick={(e) => showPosts(e.target.innerText)}>100</DropdownItem>
                    </DropdownMenu>
                </Dropdown>

            </div>

        </div>



    );
};

export default Pagin;
