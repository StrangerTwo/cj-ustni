const toWords = (name: string) => {
    const words = name.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().replaceAll(".", "").split(' ');

    const result: string[] = []
    for (const word of words) {
        if (result.join("-").length > 30) continue;
        result.push(word);
    }
    return result;
}

export default toWords;