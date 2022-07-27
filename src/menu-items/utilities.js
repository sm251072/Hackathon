// assets
import { IconTypography, IconPalette, IconShadow, IconWindmill } from '@tabler/icons';

// constant
const icons = {
    IconTypography,
    IconPalette,
    IconShadow,
    IconWindmill
};

// ==============================|| UTILITIES MENU ITEMS ||============================== //

const utilities = {
    id: 'utilities',
    title: 'Store',
    type: 'group',
    children: [
        {
            id: 'util-typography',
            title: 'Theft Protection',
            type: 'item',
            url: '/utils/util-typography',
            breadcrumbs: false
        },
        {
            id: 'util-color',
            title: 'Mobile Assessiblity',
            type: 'item',
            url: '/utils/util-color',
            breadcrumbs: false
        },
        {
            id: 'util-shadow',
            title: 'Facial Recognition',
            type: 'item',
            url: '/utils/util-shadow',
            breadcrumbs: false
        },
        {
            id: 'icons',
            title: 'Customer Personalization',
            type: 'collapse',
            children: [
                {
                    id: 'tabler-icons',
                    title: 'Past Purchases',
                    type: 'item',
                    url: '/icons/tabler-icons',
                    breadcrumbs: false
                },
                {
                    id: 'material-icons',
                    title: 'Purchases from Camera Feed',
                    type: 'item',
                    url: '/icons/material-icons',
                    breadcrumbs: false
                }
            ]
        }
    ]
};

export default utilities;
