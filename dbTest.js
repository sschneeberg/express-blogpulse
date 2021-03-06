const db = require('./models');


async function testDB() {
    const article = await db.article.findOne();
    const comment = await db.comment.create({
        articleId: article.id,
        user: 'Simone Schneeberg',
        content: 'First post wow'
    })
    console.log('art', comment);
}

async function testQ() {
    const article = await db.article.findOne({
            where: { id: 1 },
            include: [db.comment]
        })
        // by using eager loading, the article model should have a comments key
    console.log('comment', article.comments)
}


testQ();

testDB();