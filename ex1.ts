interface IMultimediaContent {
    price: number;
    isPremium: boolean;
    getStreamingPrice(): number;
    getDownloadPrice(): number;
    getAdditionalFee(): number;
}

interface IService {
    getMultimediaContent(): IMultimediaContent;
}

/**
 * Multimedia Content classes
 */

class StreamingContent implements IMultimediaContent {
    price: number;
    isPremium: boolean;
    constructor(price: number, isPremium: boolean = false) {
        this.price = price;
        this.isPremium = isPremium;
    }
    getStreamingPrice(): number {
        return this.price
    }

    getDownloadPrice(): number {
        return this.isPremium ? 2.99 : 0;
    }

    getAdditionalFee(): number {
        return 0;
    }
}

class DownloadContent implements IMultimediaContent {
    price: number;
    isPremium: boolean;
    constructor(price: number, isPremium: boolean = false) {
        this.price = price;
        this.isPremium = isPremium;
    }
    getStreamingPrice(): number {
        return 0;
    }

    getDownloadPrice(): number {
        return this.price
    }

    getAdditionalFee(): number {
        return this.isPremium ? 2.99 : 0;
    }
}

/**
 * Services classes
 */

class StreamingService implements IService {
    private price: number;
    private isPremium: boolean;
    constructor(price: number, isPremium: boolean = false) {
        this.price = price;
        this.isPremium = isPremium;
    }
    getMultimediaContent(): IMultimediaContent {
        return new StreamingContent(this.price, this.isPremium);
    }
}

class DownloadService implements IService {
    private price: number;
    private isPremium: boolean;
    constructor(price: number, isPremium: boolean = false) {
        this.price = price;
        this.isPremium = isPremium;
    }
    getMultimediaContent(): IMultimediaContent {
        return new DownloadContent(this.price, this.isPremium);
    }
}

class RegisteredUser {
    private services: IService[];

    constructor(services: IService[]) {
        this.services = services;
    }

    getTotal(): number {
        let totalCost = 0;
        for (const service of this.services) {
            const multimediaContent = service.getMultimediaContent();
            totalCost += multimediaContent.getAdditionalFee();
            totalCost += multimediaContent.getStreamingPrice();
            totalCost += multimediaContent.getDownloadPrice();
        }
        return totalCost;
    }
}

// Example
const services = [
    new StreamingService(1.99),
    new DownloadService(2.99),
];

const user = new RegisteredUser(services);

console.log(user.getTotal())