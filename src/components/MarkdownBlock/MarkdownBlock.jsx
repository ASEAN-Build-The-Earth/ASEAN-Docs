/**
 * Copyright (c) Facebook, Inc. and its affiliates. All Rights Reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
/* SOURCE FILE: https://github.com/facebook/jest */
import React from 'react';
import ReactMarkdown from 'react-markdown';
import Link from '@docusaurus/Link';
import Translate, {translate} from '@docusaurus/Translate';

const renderers = {
    a: ({node: _node, ...props}) => <Link {...props} />,
};

/*
Handle this case:
<MarkdownBlock>
<Translate>Markdown **content** with [links](https://facebook.com) can be translated</Translate>
</MarkdownBlock>
*/
function getMarkdown(children) {
if (children?.type === Translate) {
        return translate({
        id: children.props.id,
        message: children?.props?.children,
        description: children?.props?.description
        });
    } else {
        return children;
    }
}

export default function MarkdownBlock({children, ...props}) {
    const markdown = getMarkdown(children);
    const source =  markdown.replace("\\n", `&nbsp;  
`);
    return (
        <div>
            <span {...props}>
                <ReactMarkdown components={renderers}>{source}</ReactMarkdown>
            </span>
        </div>
    );
}