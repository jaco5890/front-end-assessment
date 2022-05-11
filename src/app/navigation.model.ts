
export class Navigation {
    public navItems: any[];
    constructor( ) {
        this.navItems = [
            { name: 'Employee', link: '/employee', icon: 'person' },
            { name: 'Dummy link', link: '/dummy', icon: 'logout' }
        ];
    }
}
