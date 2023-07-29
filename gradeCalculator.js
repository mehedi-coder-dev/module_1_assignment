function gradeCalculator(value) {
    switch (true) {
        case value >= 90:
            return 'A';
            break;
        case value >= 80 && value < 90:
            return 'B';
            break;
        case value >= 70 && value < 80:
            return 'C';
            break;
        case value >= 60 && value < 70:
            return 'D';
            break;
        default:
            return 'F';
            break;
    }
}

console.log(gradeCalculator(59));
