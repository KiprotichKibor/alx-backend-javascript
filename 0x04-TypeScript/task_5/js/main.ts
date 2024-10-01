// Define the MajorCredits interface
interface MajorCredits {
    credits: number;
    __brand: 'MajorCredits'; // This is a brand property
}

// Define the MinorCredits interface
interface MinorCredits {
    credits: number;
    __brand: 'MinorCredits'; // This is a brand property
}

// Function to sum MajorCredits
function sumMajorCredits(subject1: MajorCredits, subject2: MajorCredits): MajorCredits {
    return {
        credits: subject1.credits + subject2.credits,
        __brand: 'MajorCredits'
    };
}

// Function to sum MinorCredits
function sumMinorCredits(subject1: MinorCredits, subject2: MinorCredits): MinorCredits {
    return {
        credits: subject1.credits + subject2.credits,
        __brand: 'MinorCredits'
    };
}

// Example usage:
const major1: MajorCredits = { credits: 3, __brand: 'MajorCredits' };
const major2: MajorCredits = { credits: 4, __brand: 'MajorCredits' };
const minor1: MinorCredits = { credits: 1, __brand: 'MinorCredits' };
const minor2: MinorCredits = { credits: 2, __brand: 'MinorCredits' };

console.log(sumMajorCredits(major1, major2)); // { credits: 7, __brand: 'MajorCredits' }
console.log(sumMinorCredits(minor1, minor2)); // { credits: 3, __brand: 'MinorCredits' }

// This would cause a TypeScript error:
// console.log(sumMajorCredits(major1, minor1));
