import Wookie from "../src/wookie";
import { ApiService } from '../src/api-service';
import { mocked } from "ts-jest/utils";

jest.mock('../src/api-service');

describe("test add function", () => {
    const MockApiService = mocked(ApiService, true);

    beforeEach(() => {
        MockApiService.mockClear();
    });

    test("should return 2 wookies", async () => {
        MockApiService.mockReturnValueOnce({
            request(): Promise<any> {
                return new Promise((resolve, reject) => { resolve([{}, {}]) })
            }
        });

        const wookie = new Wookie(new ApiService());

        const list = await wookie.loadAll();
        expect(list).not.toEqual(undefined);
        expect(list.length).toEqual(2);
    });
});