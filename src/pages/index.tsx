import type {ReactNode} from "react";
import Link from "@docusaurus/Link";
import Layout from "@theme/Layout";
import Heading from "@theme/Heading";

import styles from "./index.module.css";

export default function Home(): ReactNode {
	return (
		<Layout
			title="Documentation"
			description="Documentation for the Your Next Festival platform">
			<main>
				<header className={styles.heroBanner}>
					<div className="container">
						<Heading as="h1" className={styles.heroTitle}>
							Your Next Festival
						</Heading>

						<p className={styles.heroSubtitle}>Documentation</p>

						<p className={styles.introduction}>
							Guides and technical documentation for configuring,
							managing, developing and deploying the Your Next
							Festival platform.
						</p>

						<div className={styles.documentationCards}>
							<Link
								className={styles.documentationCard}
								to="/docs/user-guide">
								<Heading as="h2">User Guide</Heading>
								<p>
									Learn how to configure and manage your
									festival, content, users and platform
									features.
								</p>
								<span>Open User Guide →</span>
							</Link>

							<Link
								className={styles.documentationCard}
								to="/docs/developer">
								<Heading as="h2">
									Developer Documentation
								</Heading>
								<p>
									Architecture, development, deployment, YN
									Auth, security and operational procedures.
								</p>
								<span>Open Developer Docs →</span>
							</Link>
						</div>
					</div>
				</header>
			</main>
		</Layout>
	);
}
