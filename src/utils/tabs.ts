interface Option {
    label: string;
    value: string;
    options?: Option[];
}

interface Result {
    label: string;
    value: string;
}

export const search = (data: Option[], values: [string, string]): Result[] => {
    const result: Result[] = [];

    const findInOptions = (options: Option[], values: [string, string]): boolean => {
        if (options) {
            for (let i = 0; i < options.length; i++) {
                if (options[i].value === values[1]) {
                    result.push({ label: options[i].label, value: options[i].value });
                    return true;
                }
            }
        }
        return false;
    };

    const traverse = (data: Option[], values: [string, string]): boolean => {
        if (data) {
            for (let i = 0; i < data.length; i++) {
                if (data[i].value === values[0]) {
                    result.push({ label: data[i].label, value: data[i].value });
                    findInOptions((data as any)[i].options, values);

                    return true;
                } else {
                    traverse((data as any)[i].options, values);
                }
            }
        }
        return false;
    };

    traverse(data, values);
    return result;
};
