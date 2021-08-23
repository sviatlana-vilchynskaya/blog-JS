import { HeaderComponent } from './components/header.component';
import {NavigationComponent} from './components/navigation.component';
import {CreateComponent} from './components/create.component';
import {PostsComponent} from './components/posts.component';
import {FavoriteComponent} from './components/favorite.component';
import { LoaderComponent } from './components/loader.component';

new HeaderComponent('header')

const navigation = new NavigationComponent('navigation')
const loader = new LoaderComponent('loader')

const create = new CreateComponent('create')
const posts = new PostsComponent('posts', {loader})
const favorite = new FavoriteComponent('favorite')


navigation.registerTabs ([
    {name: 'create', component: create},
    {name: 'posts', component: posts},
    {name: 'favorite', component: favorite}
])