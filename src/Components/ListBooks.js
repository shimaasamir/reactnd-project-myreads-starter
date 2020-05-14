import React from 'react'
import { Link } from 'react-router-dom'
import BookShelf from './BookShelf'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';




function ListBooks(props) {

    const { onShelfChange } = props;

    //Filter the books according to the shelf they belong to.
    const currentlyReading = props.books.filter((book) => book.shelf === 'currentlyReading')
    const wantToRead = props.books.filter((book) => book.shelf === 'wantToRead')
    const read = props.books.filter((book) => book.shelf === 'read')


    return (
        <div className="list-books">
            <div className="list-books-content">

                <Tabs>
                    <TabList>
                        <Tab>Currently Reading</Tab>
                        <Tab>Want to Read</Tab>
                        <Tab>Read</Tab>
                    </TabList>

                    <TabPanel>
                        <BookShelf
                            bookshelfBooks={currentlyReading}
                            onShelfChange={onShelfChange}

                        />
                    </TabPanel>
                    <TabPanel>
                        <BookShelf
                            bookshelfBooks={wantToRead}
                            onShelfChange={onShelfChange}
                        />
                    </TabPanel>
                    <TabPanel>
                        <BookShelf
                            bookshelfBooks={read}
                            onShelfChange={onShelfChange}
                        />
                    </TabPanel>
                </Tabs>

            </div>
            <div className="open-search">

                <Link to="/search">Add a book</Link>
            </div>

        </div>
    )
}
export default ListBooks