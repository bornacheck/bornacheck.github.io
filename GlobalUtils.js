class stringUtils {
    static internal_repeat(string, times) {
        var result = "";
        for (let index = 0; index < times; index++) {
            result += string;
        }
        return result;
    }
}

class navigation {
    // intended to be a number
    depth = 0;

    constructor(depth) {
        this.depth = depth;
    }

    goHome() {
        this.goUrl(stringUtils.internal_repeat("../", this.depth) + "index.html");
    }

    goUp() {
        this.goUrl("../index.html");
    }

    goUrl(url) {
        window.location.href = url;
    }

    goLift(levels) {
        this.goUrl(stringUtils.internal_repeat("../", levels ) + "index.html");
    }
}