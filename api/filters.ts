import { Occupation, TechStack, WorkStyle } from '../interfaces';

export const fetchFilters = async () => {
	return new Promise<{ occupations: Occupation[]; techStacks: TechStack[]; workStyles: WorkStyle[] }>((resolve) => {
		setTimeout(() => {
			const data = {
				occupations: [
					{
						label: 'CTO/VPoE/Tech Lead',
						selected: false
					},
					{
						label: 'Project Manager',
						selected: false
					},
					{
						label: 'Project Leader',
						selected: false
					},
					{
						label: 'Web Designer/Director',
						selected: false
					},
					{
						label: 'Infrastructure Engineer/SRE',
						selected: false
					},
					{
						label: 'Frontend Engineer',
						selected: false
					},
					{
						label: 'Backend Engineer',
						selected: false
					},
					{
						label: 'iOS Engineer',
						selected: false
					},
					{
						label: 'Android Engineer',
						selected: false
					},
					{
						label: 'Game Programmer/Game Engine Programmer',
						selected: false
					},
					{
						label: 'QA/Test Engineer',
						selected: false
					},
				],
				techStacks: [
					{
						label: 'Access',
						selected: false
					},
					{
						label: 'Android (Java)',
						selected: false
					},
					{
						label: 'Angular',
						selected: false
					},
					{
						label: 'Ansible',
						selected: false
					},
					{
						label: 'AWS',
						selected: false
					},
					{
						label: 'Azure',
						selected: false
					},
					{
						label: 'C#',
						selected: false
					},
					{
						label: 'C++',
						selected: false
					},
					{
						label: 'CakePHP',
						selected: false
					},
					{
						label: 'C language',
						selected: false
					},
					{
						label: 'Django',
						selected: false
					},
					{
						label: 'EC-CUBE',
						selected: false
					},
					{
						label: 'Firebase',
						selected: false
					},
					{
						label: 'Flask',
						selected: false
					},
					{
						label: 'Flutter',
						selected: false
					},
					{
						label: 'FuelPHP',
						selected: false
					},
					{
						label: 'GCP',
						selected: false
					},
					{
						label: 'Go',
						selected: false
					},
					{
						label: 'HTML/CSS',
						selected: false
					},
					{
						label: 'Illustrator',
						selected: false
					},
					{
						label: 'Java',
						selected: false
					},
					{
						label: 'JavaScript',
						selected: false
					},
					{
						label: 'Kotlin',
						selected: false
					},
					{
						label: 'Kubernetes',
						selected: false
					},
					{
						label: 'Laravel',
						selected: false
					},
					{
						label: 'Linux',
						selected: false
					},
					{
						label: 'MySQL',
						selected: false
					},
					{
						label: 'Node.js',
						selected: false
					},
					{
						label: 'Nuxt.js',
						selected: false
					},
					{
						label: 'Objective-C',
						selected: false
					},
					{
						label: 'Oracle',
						selected: false
					},
					{
						label: 'Perl',
						selected: false
					},
					{
						label: 'Photoshop',
						selected: false
					},
					{
						label: 'PHP',
						selected: false
					},
					{
						label: 'PostgreSQL',
						selected: false
					},
					{
						label: 'Python',
						selected: false
					},
					{
						label: 'R.',
						selected: false
					},
					{
						label: 'React',
						selected: false
					},
					{
						label: 'React Native',
						selected: false
					},
					{
						label: 'RPA (Biz Robo)',
						selected: false
					},
					{
						label: 'RPA (UiPath)',
						selected: false
					},
					{
						label: 'RPA (Win Actor)',
						selected: false
					},
					{
						label: 'Ruby on Rails',
						selected: false
					},
					{
						label: 'Rust',
						selected: false
					},
					{
						label: 'Salesforce',
						selected: false
					},
					{
						label: 'SAP',
						selected: false
					},
					{
						label: 'Scala',
						selected: false
					},
					{
						label: 'Sketch',
						selected: false
					},
					{
						label: 'Spring',
						selected: false
					},
					{
						label: 'SQL Server',
						selected: false
					},
					{
						label: 'Struts',
						selected: false
					},
					{
						label: 'Swift',
						selected: false
					},
					{
						label: 'Symfony',
						selected: false
					},
					{
						label: 'Tableau',
						selected: false
					},
					{
						label: 'Terraform',
						selected: false
					},
					{
						label: 'Treasure Data',
						selected: false
					},
					{
						label: 'TypeScript',
						selected: false
					},
					{
						label: 'Unity',
						selected: false
					},
					{
						label: 'VB',
						selected: false
					},
					{
						label: 'VBA',
						selected: false
					},
					{
						label: 'Vue.js',
						selected: false
					},
					{
						label: 'WordPress',
						selected: false
					},
					{
						label: 'XD',
						selected: false
					},
				],
				workStyles: [
					{
						label: 'Work from Home',
						selected: false,
					},
					{
						label: 'Onsite',
						selected: false,
					},
					{
						label: 'Both',
						selected: false,
					},
				],
			};
			resolve(data);
		}, 1000);
	});
};