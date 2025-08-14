const booksData = [
    // 📚 Fiction
    {
        id: 'f1',
        title: 'The Great Gatsby',
        author: 'F. Scott Fitzgerald',
        category: 'Fiction',
        description: 'A story of wealth, love, and the American Dream.',
        rating: 4.2
    },
    {
        id: 'f2',
        title: 'To Kill a Mockingbird',
        author: 'Harper Lee',
        category: 'Fiction',
        description: 'A novel on racial injustice in the Deep South.',
        rating: 4.8
    },
    {
        id: 'f3',
        title: 'Pride and Prejudice',
        author: 'Jane Austen',
        category: 'Fiction',
        description: 'A classic tale of love and misunderstandings.',
        rating: 4.5
    },
    {
        id: 'f4',
        title: 'The Catcher in the Rye',
        author: 'J.D. Salinger',
        category: 'Fiction',
        description: 'A teenage boy’s view of the adult world.',
        rating: 4.0
    },
    {
        id: 'f5',
        title: 'Little Women',
        author: 'Louisa May Alcott',
        category: 'Fiction',
        description: 'The lives of four sisters during the Civil War.',
        rating: 4.3
    },
    {
        id: 'f6',
        title: 'The Alchemist',
        author: 'Paulo Coelho',
        category: 'Fiction',
        description: 'A spiritual journey in search of treasure.',
        rating: 4.6
    },
    {
        id: 'f7',
        title: 'Jane Eyre',
        author: 'Charlotte Brontë',
        category: 'Fiction',
        description: 'An orphan girl becomes a governess and finds love.',
        rating: 4.4
    },
    {
        id: 'f8',
        title: 'Wuthering Heights',
        author: 'Emily Brontë',
        category: 'Fiction',
        description: 'A dark tale of obsession and revenge.',
        rating: 4.2
    },
    {
        id: 'f9',
        title: 'The Book Thief',
        author: 'Markus Zusak',
        category: 'Fiction',
        description: 'A girl steals books in Nazi Germany.',
        rating: 4.7
    },
    {
        id: 'f10',
        title: 'The Kite Runner',
        author: 'Khaled Hosseini',
        category: 'Fiction',
        description: 'Friendship and betrayal in Afghanistan.',
        rating: 4.6
    },

    // 📘 Non-Fiction
    {
        id: 'n1',
        title: 'Sapiens',
        author: 'Yuval Noah Harari',
        category: 'Non-Fiction',
        description: 'The history of humankind.',
        rating: 4.7
    },
    {
        id: 'n2',
        title: 'Educated',
        author: 'Tara Westover',
        category: 'Non-Fiction',
        description: 'A memoir of growing up and self-education.',
        rating: 4.5
    },
    {
        id: 'n3',
        title: 'Becoming',
        author: 'Michelle Obama',
        category: 'Non-Fiction',
        description: 'The former First Lady’s powerful memoir.',
        rating: 4.6
    },
    {
        id: 'n4',
        title: 'The Power of Habit',
        author: 'Charles Duhigg',
        category: 'Non-Fiction',
        description: 'How habits shape our lives.',
        rating: 4.4
    },
    {
        id: 'n5',
        title: 'Atomic Habits',
        author: 'James Clear',
        category: 'Non-Fiction',
        description: 'A proven method for building good habits.',
        rating: 4.8
    },
    {
        id: 'n6',
        title: 'Man’s Search for Meaning',
        author: 'Viktor E. Frankl',
        category: 'Non-Fiction',
        description: 'Finding purpose through suffering.',
        rating: 4.7
    },
    {
        id: 'n7',
        title: 'Outliers',
        author: 'Malcolm Gladwell',
        category: 'Non-Fiction',
        description: 'The story of success.',
        rating: 4.3
    },
    {
        id: 'n8',
        title: 'Grit',
        author: 'Angela Duckworth',
        category: 'Non-Fiction',
        description: 'The power of passion and perseverance.',
        rating: 4.4
    },
    {
        id: 'n9',
        title: 'Thinking, Fast and Slow',
        author: 'Daniel Kahneman',
        category: 'Non-Fiction',
        description: 'How we make decisions.',
        rating: 4.5
    },
    {
        id: 'n10',
        title: 'The Art of War',
        author: 'Sun Tzu',
        category: 'Non-Fiction',
        description: 'Ancient Chinese military strategy.',
        rating: 4.3
    },

    // 🚀 Science 
    {
        id: 's1',
        title: 'Dune',
        author: 'Frank Herbert',
        category: 'Science',
        description: 'Epic tale on a desert planet.',
        rating: 4.6
    },
    {
        id: 's2',
        title: 'Neuromancer',
        author: 'William Gibson',
        category: 'Science',
        description: 'A cyberpunk hacker story.',
        rating: 4.2
    },
    {
        id: 's3',
        title: 'Foundation',
        author: 'Isaac Asimov',
        category: 'Science',
        description: 'The fall of a galactic empire.',
        rating: 4.4
    },
    {
        id: 's4',
        title: 'Snow Crash',
        author: 'Neal Stephenson',
        category: 'Science',
        description: 'Virtual reality and ancient languages.',
        rating: 4.1
    },
    {
        id: 's5',
        title: 'The Martian',
        author: 'Andy Weir',
        category: 'Science',
        description: 'A man stranded on Mars fights to survive.',
        rating: 4.5
    },
    {
        id: 's6',
        title: 'Ender’s Game',
        author: 'Orson Scott Card',
        category: 'Science',
        description: 'A young boy trained for interstellar war.',
        rating: 4.6
    },
    {
        id: 's7',
        title: 'Ready Player One',
        author: 'Ernest Cline',
        category: 'Science',
        description: 'Virtual reality and 80s nostalgia.',
        rating: 4.3
    },
    {
        id: 's8',
        title: 'Hyperion',
        author: 'Dan Simmons',
        category: 'Science',
        description: 'Pilgrims journey through space and time.',
        rating: 4.4
    },
    {
        id: 's9',
        title: 'Brave New World',
        author: 'Aldous Huxley',
        category: 'Science',
        description: 'A dystopian future of control and comfort.',
        rating: 4.2
    },
    {
        id: 's10',
        title: 'I, Robot',
        author: 'Isaac Asimov',
        category: 'Science',
        description: 'The origin of modern robot laws.',
        rating: 4.1
    },

    // 🧙 Fantasy
    {
        id: 'fa1',
        title: 'The Hobbit',
        author: 'J.R.R. Tolkien',
        category: 'Fantasy',
        description: 'A hobbit’s unexpected adventure.',
        rating: 4.8
    },
    {
        id: 'fa2',
        title: 'Harry Potter and the Sorcerer’s Stone',
        author: 'J.K. Rowling',
        category: 'Fantasy',
        description: 'A young wizard’s first year at Hogwarts.',
        rating: 4.9
    },
    {
        id: 'fa3',
        title: 'The Name of the Wind',
        author: 'Patrick Rothfuss',
        category: 'Fantasy',
        description: 'A gifted young man’s coming-of-age story.',
        rating: 4.7
    },
    {
        id: 'fa4',
        title: 'Mistborn',
        author: 'Brandon Sanderson',
        category: 'Fantasy',
        description: 'A world of magic powered by metals.',
        rating: 4.6
    },
    {
        id: 'fa5',
        title: 'The Way of Kings',
        author: 'Brandon Sanderson',
        category: 'Fantasy',
        description: 'Epic battles and ancient powers awaken.',
        rating: 4.8
    },
    {
        id: 'fa6',
        title: 'Eragon',
        author: 'Christopher Paolini',
        category: 'Fantasy',
        description: 'A farm boy discovers he is a Dragon Rider.',
        rating: 4.5
    },
    {
        id: 'fa7',
        title: 'The Lies of Locke Lamora',
        author: 'Scott Lynch',
        category: 'Fantasy',
        description: 'Thieves and con artists in a magical city.',
        rating: 4.4
    },
    {
        id: 'fa8',
        title: 'The Blade Itself',
        author: 'Joe Abercrombie',
        category: 'Fantasy',
        description: 'Dark, gritty fantasy with morally gray heroes.',
        rating: 4.3
    },
    {
        id: 'fa9',
        title: 'A Game of Thrones',
        author: 'George R.R. Martin',
        category: 'Fantasy',
        description: 'Warring kingdoms and noble houses.',
        rating: 4.7
    },
    {
        id: 'fa10',
        title: 'The Priory of the Orange Tree',
        author: 'Samantha Shannon',
        category: 'Fantasy',
        description: 'Epic standalone fantasy with dragons and queens.',
        rating: 4.4
    },

    // 🔎 Mystery
    {
        id: 'm1',
        title: 'Gone Girl',
        author: 'Gillian Flynn',
        category: 'Mystery',
        description: 'A woman disappears on her wedding anniversary.',
        rating: 4.5
    },
    {
        id: 'm2',
        title: 'The Girl with the Dragon Tattoo',
        author: 'Stieg Larsson',
        category: 'Mystery',
        description: 'A journalist investigates a wealthy family’s secrets.',
        rating: 4.4
    },
    {
        id: 'm3',
        title: 'The Da Vinci Code',
        author: 'Dan Brown',
        category: 'Mystery',
        description: 'A symbologist uncovers a religious conspiracy.',
        rating: 4.3
    },
    {
        id: 'm4',
        title: 'Big Little Lies',
        author: 'Liane Moriarty',
        category: 'Mystery',
        description: 'Dark secrets behind a perfect suburban life.',
        rating: 4.2
    },
    {
        id: 'm5',
        title: 'The Girl on the Train',
        author: 'Paula Hawkins',
        category: 'Mystery',
        description: 'A woman witnesses something shocking from a train.',
        rating: 4.1
    },
    {
        id: 'm6',
        title: 'Sherlock Holmes: The Hound of the Baskervilles',
        author: 'Arthur Conan Doyle',
        category: 'Mystery',
        description: 'Holmes investigates a deadly legend.',
        rating: 4.6
    },
    {
        id: 'm7',
        title: 'In the Woods',
        author: 'Tana French',
        category: 'Mystery',
        description: 'A detective investigates a crime tied to his past.',
        rating: 4.2
    },
    {
        id: 'm8',
        title: 'And Then There Were None',
        author: 'Agatha Christie',
        category: 'Mystery',
        description: 'Ten strangers trapped with a killer.',
        rating: 4.8
    },
    {
        id: 'm9',
        title: 'The Silent Patient',
        author: 'Alex Michaelides',
        category: 'Mystery',
        description: 'A woman stops speaking after murdering her husband.',
        rating: 4.5
    },
    {
        id: 'm10',
        title: 'Before I Go to Sleep',
        author: 'S.J. Watson',
        category: 'Mystery',
        description: 'A woman loses her memory every day.',
        rating: 4.3
    }
];

export default booksData;