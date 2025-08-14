import React from 'react';
import ExUseContext01 from './ExUseContext01';
import ExUseRef01 from './ExUseRef01';
import ExUseMemo01 from './ExUseMemo01';
import ExUseMemo02 from './ExUseMemo02';
import ExUseReducer01 from './ExUseReducer01';

const Day05_20250813 = () => {
	return (
		<>
			<h2>React Day 05 20250813</h2>
			<hr />
			<p>UseContext</p>
			<ExUseContext01 />
			<hr />
			<p>UseRef</p>
			<ExUseRef01 />
			<hr />
			<p>UseMemo</p>
			<ExUseMemo01 />
			<hr />
			<p>UseMemo2</p>
			<ExUseMemo02 />
			<hr />
			<p>UseReducer</p>
			<ExUseReducer01 />
		</>
	);
};

export default Day05_20250813;
