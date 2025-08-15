import Header1 from "@components/headers/Header1";
export default function EqualEmploymentOpportunity() {
    return (
        <div className="bg-gray-100 text-gray-800 min-h-screen">
            <Header1 
            title="Equal Employment Opportunity"
            text="We are an Equal Opportunity/Affirmative Action Employer."
            />
            <div className="container mx-auto pt-52">
            <p className="mb-4">
                We are an Equal Opportunity/Affirmative Action Employer. We consider applicants without regard to race, color, religion, age, national origin, ancestry, ethnicity, gender, gender identity, gender expression, sexual orientation, marital status, veteran status, disability, genetic information, citizenship status, or membership in any other group protected by federal, state, or local law.
            </p>
            </div>
        </div>
    );
}
