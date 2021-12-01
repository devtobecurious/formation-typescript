export class Guard {
    attak() {
    }
}

export class ChildGuard extends Guard {
    attak(): void {
        super.attak();
    }
}


export { ChildGuard as child };