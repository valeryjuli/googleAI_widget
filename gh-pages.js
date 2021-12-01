var ghpages = require('gh-pages');

ghpages.publish(
    'public',
    {
        branch: 'gh-pages',
        repo: 'https://github.com/valeryjuli/googleAI_widget.git',
        user: {
            name: 'Valery Neira',
            email: 'valeryjuli@gmail.com'
        }
    },
    () => {
        console.log('Deploy Complete!')
    }
)