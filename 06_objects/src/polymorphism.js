function rowHeights(rows) {
    // The map() method creates a new array with the results of calling
    // a provided function on every element in this array.
    return rows.map(function (row) {

        // The reduce() method applies a function against an accumulator and each value
        // of the array (from left-to-right) has to reduce it to a single value.
        return row.reduce(function (max, cell) {

            // The Math.max() function returns the largest of zero or more numbers.
            return Math.max(max, cell.minHeight());
        }, 0);
    });
}

function colWidths(rows) {
    return rows[0].map(function (_, i) {
        return rows.reduce(function (max, row) {
            return Math.max(max, row[i].minWidth());
        }, 0);
    })
}

function drawTable(rows) {
    var heights = rowHeights(rows);
    var widths = colWidths(rows);

    function drawLine(blocks, lineNo) {
        return blocks.map(function (block) {
            return block[lineNo];
        }).join(" ");
    }

    function drawRow(row, rowNum) {
        var blocks = row.map(function (cell, colNum) {
            return cell.draw(widths[colNum], heights[rowNum]);
        });
        return blocks[0].map(function (_, lineNo) {
            return drawLine(blocks, lineNo);
        }).join("\n");
    }

    return rows.map(drawRow).join("\n");
}

function repeat(string, times) {
    var result = "";
    for (var i = 0; i < times; i++) {
        result += string;
    }
    return result;
}

function TextCell(text) {
    this.text = text.split("\n");
}
TextCell.prototype.minWidth = function () {
    return this.text.reduce(function (width, line) {
        return Math.max(width, line.length);
    }, 0);
};
TextCell.prototype.minHeight = function () {
    return this.text.length;
};
TextCell.prototype.draw = function (width, height) {
    var result = [];
    for (var i = 0; i < height; i++) {
        var line = this.text[i] || "";
        // draw padding for line
        result.push(line + repeat(" ", width - line.length));
    }
    return result;
};

var rows = [];
for (var i = 0; i < 5; i++) {
    var row = [];
    for (var j = 0; j < 5; j++) {
        if ((j + i) % 2 == 0)
            row.push(new TextCell("##"));
        else
            row.push(new TextCell("  "));
    }
    rows.push(row);
}
console.log(drawTable(rows));
