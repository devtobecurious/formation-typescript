import Wookie from "../src/wookie";
import axios, { AxiosResponse } from 'axios';
import { mocked } from "ts-jest/utils";
import { ApiServiceAxios } from "../src/api-bis.services";
import Droid from "../src/droid";

jest.mock('axios');

describe("test add function", () => {
    const MockAxios = mocked(axios, true);

    beforeEach(() => {
        MockAxios.mockClear();
    });

    test("should return 2 droid", async () => {
        const response: AxiosResponse = {
            data: [{}, {}],
            status: 200,
            statusText: "OK",
            config:  {},
            headers: {}
        }

        //MockAxios.mockResolvedValue(response);
        MockAxios.get.mockResolvedValueOnce([{}, {}]);

        const droid = new Droid(new ApiServiceAxios());

        const list = await droid.loadAll();

        console.info('list ?', list);

        expect(list).not.toEqual(undefined);
        expect(list.length).toEqual(2);
    });
});