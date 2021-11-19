const path = require('path');
const content = require('./src/content/Content.json');

exports.createPages = ({ actions }) => {
    const { createPage } = actions;
    const PageTemplate = path.resolve('src/components/templates/ServicePageTemplate.tsx');
    content.services.services.forEach((service) => {
        createPage({
            path: `services/${service.slugs[0]}`,
            component: PageTemplate,
            context: {
                service: service
            }
        })
    })

}